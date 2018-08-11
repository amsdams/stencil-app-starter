/**
 * OpenWeatherMap API
 * Get current weather, daily forecast for 16 days, and 3-hourly forecast 5 days for your city. Helpful stats, graphics, and this day in history charts are available for your reference. Interactive maps show precipitation, clouds, pressure, wind around your location stations. Data is available in JSON, XML, or HTML format. **Note**: This sample Swagger file covers the `current` endpoint only from the OpenWeatherMap API. <br/><br/> **Note**: All parameters are optional, but you must select at least one parameter. Calling the API by city ID (using the `id` parameter) will provide the most precise location results.
 *
 * OpenAPI spec version: 2.5
 * Contact: some_email@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */






export interface Weather { 

    
    /**
     * Weather condition id
     */
    
    id?: number;

    
    /**
     * Group of weather parameters (Rain, Snow, Extreme etc.)
     */
    
    main?: string;

    
    /**
     * Weather condition within the group
     */
    
    description?: string;

    
    /**
     * Weather icon id
     */
    
    icon?: string;

}


