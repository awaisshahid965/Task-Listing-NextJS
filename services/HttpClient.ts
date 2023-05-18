import { HttpRequestMethods } from "@/src/shared/constants";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

const headerConfig = { "Content-Type": "application/json" };

class HttpClient {
  static async get(resourcePath: string) {
    const request = await fetch(`${API_ENDPOINT}${resourcePath}`, {
      method: HttpRequestMethods.GET,
    });
    const responseObject = await request.json();
    return responseObject;
  }

  static async post(resourcePath: string, body: any) {
    const request = await fetch(`${API_ENDPOINT}${resourcePath}`, {
      method: HttpRequestMethods.POST,
      headers: headerConfig,
      body: JSON.stringify(body),
    });
    const responseObject = await request.json();
    return responseObject;
  }

  static async delete(resourcePath: string) {
    const request = await fetch(`${API_ENDPOINT}${resourcePath}`, {
      method: HttpRequestMethods.DELETE,
    });
    const responseObject = await request.json();
    return responseObject;
  }

  static async patch(resourcePath: string, body: any) {
    const request = await fetch(`${API_ENDPOINT}${resourcePath}`, {
      method: HttpRequestMethods.PATCH,
      headers: headerConfig,
      body: JSON.stringify(body),
    });
    const responseObject = await request.json();
    return responseObject;
  }
}

export default HttpClient;
