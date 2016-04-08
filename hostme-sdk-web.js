var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var OnlineAvailability;
        (function (OnlineAvailability) {
            (function (AvailabilityLevelEnum) {
                AvailabilityLevelEnum[AvailabilityLevelEnum["Available"] = 'Available'] = "Available";
                AvailabilityLevelEnum[AvailabilityLevelEnum["AvailableForWait"] = 'AvailableForWait'] = "AvailableForWait";
                AvailabilityLevelEnum[AvailabilityLevelEnum["NotEnoughCovers"] = 'NotEnoughCovers'] = "NotEnoughCovers";
                AvailabilityLevelEnum[AvailabilityLevelEnum["Overbooked"] = 'Overbooked'] = "Overbooked";
            })(OnlineAvailability.AvailabilityLevelEnum || (OnlineAvailability.AvailabilityLevelEnum = {}));
            var AvailabilityLevelEnum = OnlineAvailability.AvailabilityLevelEnum;
        })(OnlineAvailability = Sdk.OnlineAvailability || (Sdk.OnlineAvailability = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var Reservation;
        (function (Reservation) {
            (function (TypeEnum) {
                TypeEnum[TypeEnum["Standard"] = 'Standard'] = "Standard";
                TypeEnum[TypeEnum["Hybrid"] = 'Hybrid'] = "Hybrid";
            })(Reservation.TypeEnum || (Reservation.TypeEnum = {}));
            var TypeEnum = Reservation.TypeEnum;
        })(Reservation = Sdk.Reservation || (Sdk.Reservation = {}));
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
/* tslint:disable:no-unused-variable member-ordering */
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
        var WebReservationsApi = (function () {
            function WebReservationsApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'http://hostme-services-dev.azurewebsites.net';
                this.defaultHeaders = {};
                if (basePath) {
                    this.basePath = basePath;
                }
            }
            WebReservationsApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             *
             *
             * @param restaurantId
             * @param value
             */
            WebReservationsApi.prototype.addNewReservation = function (restaurantId, value, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/web/restaurants/{restaurantId}/reservations'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling addNewReservation');
                }
                // verify required parameter 'value' is set
                if (!value) {
                    throw new Error('Missing required parameter value when calling addNewReservation');
                }
                var httpRequestParams = {
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
            };
            /**
             *
             *
             * @param lat
             * @param lon
             * @param name
             */
            WebReservationsApi.prototype.findRestaurants = function (lat, lon, name, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/web/restaurants/find';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                if (lat !== undefined) {
                    queryParameters['lat'] = lat;
                }
                if (lon !== undefined) {
                    queryParameters['lon'] = lon;
                }
                if (name !== undefined) {
                    queryParameters['name'] = name;
                }
                var httpRequestParams = {
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
            };
            /**
             *
             *
             * @param restaurantId
             * @param date
             * @param partySize
             * @param rangeInMinutes
             * @param areas
             */
            WebReservationsApi.prototype.getReservationAvailability = function (restaurantId, date, partySize, rangeInMinutes, areas, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/web/restaurants/{restaurantId}/availability'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
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
                var httpRequestParams = {
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
            };
            /**
             *
             *
             * @param restaurantId
             */
            WebReservationsApi.prototype.getRestaurantById = function (restaurantId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/api/rsv/web/restaurants/{restaurantId}'
                    .replace('{' + 'restaurantId' + '}', String(restaurantId));
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'restaurantId' is set
                if (!restaurantId) {
                    throw new Error('Missing required parameter restaurantId when calling getRestaurantById');
                }
                var httpRequestParams = {
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
            };
            WebReservationsApi.$inject = ['$http', '$httpParamSerializer'];
            return WebReservationsApi;
        }());
        Sdk.WebReservationsApi = WebReservationsApi;
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
var HostMe;
(function (HostMe) {
    var Sdk;
    (function (Sdk) {
        'use strict';
    })(Sdk = HostMe.Sdk || (HostMe.Sdk = {}));
})(HostMe || (HostMe = {}));
