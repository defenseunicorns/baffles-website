import { OS } from './types';

export function getInstallCommand(os: OS): string {
  let installCommand = '';
  switch (os) {
    case OS.mac:
      installCommand = 'brew tap defenseunicorns/tap && brew install zarf';
      break;
    case OS.linux:
      installCommand = 'curl something and stuff.';
  }
  return installCommand;
}

export function curryCopyClipboard(
  navigator: Navigator,
  text: string,
): () => Promise<void> {
  return (): Promise<void> => navigator.clipboard.writeText(text);
}
