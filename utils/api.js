import { get, set, isProgramDownloaded, getAllOfflinePrograms, setOfflinePrograms } from './database';

const PROGRAMS_URL = "https://raw.githubusercontent.com/eighth-mile/syllabus-repo/main/programs.json";
const REPO_URL = "https://raw.githubusercontent.com/eighth-mile/syllabus-repo/main/"

export const getProgramsFromRepo = async () => {
  const response = await fetch(PROGRAMS_URL);
  const programs = await response.json();

  for (const [i, program] of programs.entries()) {
    const isDownloaded = await isProgramDownloaded(program.title);
    programs[i].isDownloaded = isDownloaded
  }

  await set('programs', programs);
  return programs;
}

export const downloadFileFromRepo = async (path) => {
  const fullUrl = `${REPO_URL}/${path}`;
  const response = await fetch(fullUrl);
  if (!response.ok) {
    throw new Error("Error while downloading from the repo!");
  }

  const text = await response.text();
  return text;
}

export const downloadProgramFromRepo = async (index) => {
  const programs = await get('programs');
  const program = programs[index];
  const subjects = program.subjects;
  const downloadCalls = subjects.map(subject => downloadFileFromRepo(subject.path));
  const subjectContents = await Promise.all(downloadCalls);

  for (const [i, subjectContent] of subjectContents.entries()) {
    const key = subjects[i].path;
    const value = {
      path: key,
      title: subjects[i].title,
      code: subjects[i].code,
      content: subjectContent
    };
    await set(key, value);
  }

  // Override offline programs
  const offlinePrograms = await getAllOfflinePrograms();
  offlinePrograms[program.title] = program;
  await setOfflinePrograms(offlinePrograms);

  return subjectContents;
}
