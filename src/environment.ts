export interface Environment {
  baseUrl: string
}

const prod: Environment = {
  baseUrl: "https://functionapp-qprppmwsyty2i.azurewebsites.net",
}

export const environment: Environment = prod
