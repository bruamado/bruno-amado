export async function getClientInfo() {
  try {
    const response = await fetch("https://ipapi.co/json/")

    if (!response.ok) {
      return {
        ip: "Não disponível",
        network: "Não disponível",
        version: "Não disponível",
        org: "Não disponível",
        country_calling_code: "Não disponível",
        city: "Não disponível",
        region: "Não disponível",
        region_code: "Não disponível",
        country: "Não disponível",
        country_name: "Não disponível",
        languages: "Não disponível",
        utc_offset: "Não disponível",
        asn: "Não disponível",
      }
    }

    const data: {
      ip: string
      city: string
      region: string
      country: string
      isp: string
      asn: string
      network: string
      version: string
      org: string
      country_calling_code: string
      country_name: string
      languages: string
      utc_offset: string
      region_code: string
    } = await response.json()
    return {
      ip: data.ip,
      city: data.city,
      region: data.region,
      country: data.country,
      isp: data.isp,
      asn: data.asn,
      network: data.network,
      version: data.version,
      org: data.org,
      country_calling_code: data.country_calling_code,
      country_name: data.country_name,
      languages: data.languages,
      utc_offset: data.utc_offset,
      region_code: data.region_code,
    }
  } catch {
    return {
      ip: "Não disponível",
      city: "Não disponível",
      region: "Não disponível",
      country: "Não disponível",
      isp: "Não disponível",
      asn: "Não disponível",
      network: "Não disponível",
      version: "Não disponível",
      org: "Não disponível",
      country_calling_code: "Não disponível",
      country_name: "Não disponível",
      languages: "Não disponível",
      utc_offset: "Não disponível",
      region_code: "Não disponível",
    }
  }
}
