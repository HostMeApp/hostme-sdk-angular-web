/* tslint:disable:no-unused-variable member-ordering */


namespace HostMe.Sdk {
    'use strict';


    export class WebReservationsApi {
        protected basePath = 'http://hostme-services-dev.azurewebsites.net';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }


        /**
         * 
         * 
         * @param restaurantId 
         * @param value 
         */
        public addNewReservation (restaurantId: number, value: NewWebReservationBindingModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<Reservation> {
            const localVarPath = this.basePath + '/api/rsv/web/restaurants/{restaurantId}/reservations'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling addNewReservation');
            }



            // verify required parameter 'value' is set
            if (!value) {
                throw new Error('Missing required parameter value when calling addNewReservation');
            }






            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: value,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        /**
         * 
         * 
         * @param lat 
         * @param lon 
         * @param name 
         */
        public findRestaurants (lat?: number, lon?: number, name?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<RestaurantInfo>> {
            const localVarPath = this.basePath + '/api/rsv/web/restaurants/find';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);









            if (lat !== undefined) {
                queryParameters['lat'] = lat;
            }


            if (lon !== undefined) {
                queryParameters['lon'] = lon;
            }


            if (name !== undefined) {
                queryParameters['name'] = name;
            }





            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        /**
         * 
         * 
         * @param restaurantId 
         * @param date 
         * @param partySize 
         * @param rangeInMinutes 
         * @param areas 
         */
        public getReservationAvailability (restaurantId: number, date: Date, partySize: number, rangeInMinutes: number, areas?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<OnlineAvailability>> {
            const localVarPath = this.basePath + '/api/rsv/web/restaurants/{restaurantId}/availability'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getReservationAvailability');
            }



            // verify required parameter 'date' is set
            if (!date) {
                throw new Error('Missing required parameter date when calling getReservationAvailability');
            }



            // verify required parameter 'partySize' is set
            if (!partySize) {
                throw new Error('Missing required parameter partySize when calling getReservationAvailability');
            }



            // verify required parameter 'rangeInMinutes' is set
            if (!rangeInMinutes) {
                throw new Error('Missing required parameter rangeInMinutes when calling getReservationAvailability');
            }





            if (date !== undefined) {
                queryParameters['date'] = date;
            }


            if (partySize !== undefined) {
                queryParameters['partySize'] = partySize;
            }


            if (rangeInMinutes !== undefined) {
                queryParameters['rangeInMinutes'] = rangeInMinutes;
            }


            if (areas !== undefined) {
                queryParameters['areas'] = areas;
            }





            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

        /**
         * 
         * 
         * @param restaurantId 
         */
        public getRestaurantById (restaurantId: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<RestaurantInfo> {
            const localVarPath = this.basePath + '/api/rsv/web/restaurants/{restaurantId}'
                .replace('{' + 'restaurantId' + '}', String(restaurantId));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);



            // verify required parameter 'restaurantId' is set
            if (!restaurantId) {
                throw new Error('Missing required parameter restaurantId when calling getRestaurantById');
            }






            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                
                
                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }

    }
}

