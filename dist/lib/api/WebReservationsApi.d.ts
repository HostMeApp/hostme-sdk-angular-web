import * as models from '../model/models';
import * as auth from './auth';
import { IApiConfig } from '../client/IApiConfig';
export declare class WebReservationsApi {
    protected $http: ng.IHttpService;
    protected config: IApiConfig;
    protected $httpParamSerializer: (d: any) => any;
    defaultHeaders: any;
    static $inject: string[];
    constructor($http: ng.IHttpService, config: IApiConfig, $httpParamSerializer?: (d: any) => any);
    authentications: {
        'default': auth.Authentication;
        'oauth2': auth.OAuth;
    };
    accessToken: string;
    private extendObj<T1, T2>(objA, objB);
    addNewReservation(restaurantId: number, value: models.CreateWebReservation, extraHttpRequestParams?: any): ng.IHttpPromise<models.Reservation>;
    findRestaurants(lat?: number, lon?: number, name?: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.RestaurantInfo>>;
    getReservationAvailability(restaurantId: number, date: Date, partySize: number, rangeInMinutes: number, areas?: string, extraHttpRequestParams?: any): ng.IHttpPromise<Array<models.OnlineAvailability>>;
    getRestaurantById(restaurantId: number, extraHttpRequestParams?: any): ng.IHttpPromise<models.RestaurantInfo>;
}
