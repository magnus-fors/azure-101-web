export interface Environment {
  baseUrl: string
}

const prod: Environment = {
  baseUrl: "https://api.magnusfo.course.connect.axis.com",
}

export const environment: Environment = prod
