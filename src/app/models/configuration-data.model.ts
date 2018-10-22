export interface ServiceDetail {
    url: string;
}

export interface ServiceEndpoints {
    [serviceName: string]: {
        url: string;
    };
}

export interface ConfigurationData {
    serviceEndpoints: ServiceEndpoints;
    something: string;
}