export interface MimeTypes {
  [key: string]: string;
}

export const mimeTypes: MimeTypes = {
  '.epub': 'application/epub+zip',
  '.mobi': 'application/x-mobipocket-ebook',
  '.azw': 'application/vnd.amazon.ebook',
  '.pdf': 'application/pdf',
  '.fb2': 'application/x-fictionbook+xml',
  '.txt': 'text/plain',
  '.html': 'text/html',
  '.doc': 'application/msword',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
};
