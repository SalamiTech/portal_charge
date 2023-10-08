import { IHostHeaderInfo } from './host-header-info.model';



export interface IPickedFile {
  file: File | null;
  name: string;
  url: string | ArrayBuffer;
  isUploaded: boolean;
}

export interface IDocumentUploadSelectInfo<T> {
  businessId: T;
  businessAddress: T;
  license: T;
  permit: T;
  registration: T;
  relatedParties: T;
  resolution: T;
  passportPicture: T;
  signatureCard: T;
  mandatorySignature: T;
  others: T;
  fatca1: T;
  fatca2: T;
  fatca3: T;
}

export interface IDocumentUploadSelectInfoResp<T> {
  businessId: T;
  businessAddress: T;
  license: T;
  permit: T;
  registration: T;
  relatedParties: T;
  resolution: T;
  passportPicture: T;
  signatureCard: T;
  mandatorySignature: T;
  others: T;
  fatca1: T;
  fatca2: T;
  fatca3: T;
}

export class DocumentUploadInfo
  implements IDocumentUploadSelectInfo<IPickedFile[]>
{
  public businessId: IPickedFile[] = [];
  public businessAddress: IPickedFile[] = [];
  public license: IPickedFile[] = [];
  public permit: IPickedFile[] = [];
  public registration: IPickedFile[] = [];
  public relatedParties: IPickedFile[] = [];
  public resolution: IPickedFile[] = [];
  public passportPicture: IPickedFile[] = [];
  public signatureCard: IPickedFile[] = [];
  public mandatorySignature: IPickedFile[] = [];
  public others: IPickedFile[] = [];
  public fatca1: IPickedFile[] = [];
  public fatca2: IPickedFile[] = [];
  public fatca3: IPickedFile[] = [];

  constructor() { }

  transform() {
    const res: IDocumentUploadSelectInfo<string[]> = {
      businessId: [],
      businessAddress: [],
      license: [],
      permit: [],
      registration: [],
      relatedParties: [],
      resolution: [],
      passportPicture: [],
      signatureCard: [],
      mandatorySignature: [],
      others: [],
      fatca1: [],
      fatca2: [],
      fatca3: [],
    };

    //filter business Ids
    this.businessId.map((data) => {
      if (data.isUploaded) res.businessId.push(data.url as string);
    });
    //businessAddress business Ids
    this.businessAddress.map((data) => {
      if (data.isUploaded) res.businessAddress.push(data.url as string);
    });

    //license business Ids
    this.license.map((data) => {
      if (data.isUploaded) res.license.push(data.url as string);
    });

    //permit business Ids
    this.permit.map((data) => {
      if (data.isUploaded) res.permit.push(data.url as string);
    });

    //registration business Ids
    this.registration.map((data) => {
      if (data.isUploaded) res.registration.push(data.url as string);
    });

    //relatedParties business Ids
    this.relatedParties.map((data) => {
      if (data.isUploaded) res.relatedParties.push(data.url as string);
    });

    //resolution business Ids
    this.resolution.map((data) => {
      if (data.isUploaded) res.resolution.push(data.url as string);
    });

    //passportPicture business Ids
    this.passportPicture.map((data) => {
      if (data.isUploaded) res.passportPicture.push(data.url as string);
    });

    //signatureCard business Ids
    this.signatureCard.map((data) => {
      if (data.isUploaded) res.signatureCard.push(data.url as string);
    });

    //mandatorySignature business Ids
    this.mandatorySignature.map((data) => {
      if (data.isUploaded) res.mandatorySignature.push(data.url as string);
    });

    //others business Ids
    this.others.map((data) => {
      if (data.isUploaded) res.others.push(data.url as string);
    });

    //fatca1 business Ids
    this.fatca1.map((data) => {
      if (data.isUploaded) res.fatca1.push(data.url as string);
    });

    //fatca2 business Ids
    this.fatca2.map((data) => {
      if (data.isUploaded) res.fatca2.push(data.url as string);
    });

    //fatca3 business Ids
    this.fatca3.map((data) => {
      if (data.isUploaded) res.fatca3.push(data.url as string);
    });

    return res;
  }
}

export interface MultipleFileUploadResponse {
  responseCode: string;
  responseMsg: string;
  fileInfo: FileInfo[];
}

export interface FileInfo {
  fileName: string;
  filePath: string;
}
