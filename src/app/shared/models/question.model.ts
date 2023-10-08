export interface IResponse {
  question: IQuestion,
  response: string
}

export interface IQuestion {
  question: string
  options: string[]
}

