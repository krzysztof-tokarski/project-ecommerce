export interface FileUploadComponentOptions {
  showUploadButton?: boolean;
  showCancelButton?: boolean;
  acceptableFileTypes?: string;
  maxFileSize?: number;
  invalidFileSizeMessageSummary?: string;
  invalidFileSizeMessageDetail?: string;
  invalidFileTypeMessageDetail?: string;
  invalidFileLimitMessageDetail?: string;
}
