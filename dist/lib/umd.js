(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.listComponent = f()
    }
})(function() {
        var define, module, exports;
require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var auth = require('./auth');
'use strict';
var WebReservationsApi = (function () {
    function WebReservationsApi($http, config, $httpParamSerializer) {
        this.$http = $http;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
        this.authentications = {
            'default': new auth.VoidAuth(),
            'oauth2': new auth.OAuth(),
        };
    }
    Object.defineProperty(WebReservationsApi.prototype, "accessToken", {
        set: function (token) {
            this.authentications.oauth2.accessToken = token;
        },
        enumerable: true,
        configurable: true
    });
    WebReservationsApi.prototype.extendObj = function (objA, objB) {
        for (var key in objB) {
            if (objB.hasOwnProperty(key)) {
                objA[key] = objB[key];
            }
        }
        return objA;
    };
    WebReservationsApi.prototype.addNewReservation = function (restaurantId, value, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/web/restaurants/{restaurantId}/reservations'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling addNewReservation');
        }
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    WebReservationsApi.prototype.findRestaurants = function (lat, lon, name, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/web/restaurants/find';
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    WebReservationsApi.prototype.getReservationAvailability = function (restaurantId, date, partySize, rangeInMinutes, areas, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/web/restaurants/{restaurantId}/availability'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
        if (!restaurantId) {
            throw new Error('Missing required parameter restaurantId when calling getReservationAvailability');
        }
        if (!date) {
            throw new Error('Missing required parameter date when calling getReservationAvailability');
        }
        if (!partySize) {
            throw new Error('Missing required parameter partySize when calling getReservationAvailability');
        }
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    WebReservationsApi.prototype.getRestaurantById = function (restaurantId, extraHttpRequestParams) {
        var localVarPath = this.config.basePath + '/api/rsv/web/restaurants/{restaurantId}'
            .replace('{' + 'restaurantId' + '}', String(restaurantId));
        var queryParameters = {};
        var headerParams = this.extendObj({}, this.defaultHeaders);
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
        this.authentications.default.applyToRequest(httpRequestParams);
        return this.$http(httpRequestParams);
    };
    WebReservationsApi.$inject = ['$http', 'IApiConfig', '$httpParamSerializer'];
    return WebReservationsApi;
}());
exports.WebReservationsApi = WebReservationsApi;

},{"./auth":3}],2:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./WebReservationsApi'));

},{"./WebReservationsApi":1}],3:[function(require,module,exports){
"use strict";
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
    }
    HttpBasicAuth.prototype.applyToRequest = function (httpRequestParams) {
        httpRequestParams.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
    }
    ApiKeyAuth.prototype.applyToRequest = function (httpRequestParams) {
        if (this.location === 'query') {
            httpRequestParams.qs[this.paramName] = this.apiKey;
        }
        else if (this.location === 'header') {
            httpRequestParams.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
    }
    OAuth.prototype.applyToRequest = function (httpRequestParams) {
        httpRequestParams.headers['Authorization'] = 'Bearer ' + this.accessToken;
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
    }
    VoidAuth.prototype.applyToRequest = function (httpRequestParams) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;

},{}],4:[function(require,module,exports){
"use strict";
var AuthorizationService = (function () {
    function AuthorizationService($http, $q, config, $httpParamSerializer) {
        this.$http = $http;
        this.$q = $q;
        this.config = config;
        this.$httpParamSerializer = $httpParamSerializer;
        this.defaultHeaders = {};
    }
    AuthorizationService.prototype.Authorize = function (api, userName, password) {
        var deffer = this.$q.defer();
        this.getToken(userName, password).then(function (response) {
            api.authentications.oauth2.accessToken = response.access_token;
            deffer.resolve();
        }, function (params) {
            deffer.reject(params);
        });
        return deffer.promise;
    };
    AuthorizationService.prototype.getToken = function (userName, password) {
        var deffer = this.$q.defer();
        var localVarPath = this.config.basePath + '/Token';
        var headerParams = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
        var value = {
            username: userName,
            password: password,
            grant_type: 'password'
        };
        var httpRequestParams = {
            method: 'POST',
            url: localVarPath,
            json: true,
            data: this.$httpParamSerializer(value),
            headers: headerParams
        };
        this.$http(httpRequestParams).then(function (response) {
            deffer.resolve(response.data);
        });
        return deffer.promise;
    };
    ;
    AuthorizationService.$inject = ['$http', '$q', 'IApiConfig', '$httpParamSerializer'];
    return AuthorizationService;
}());
exports.AuthorizationService = AuthorizationService;

},{}],5:[function(require,module,exports){
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
})(OnlineAvailability = exports.OnlineAvailability || (exports.OnlineAvailability = {}));

},{}],6:[function(require,module,exports){
'use strict';
var Reservation;
(function (Reservation) {
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Standard"] = 'Standard'] = "Standard";
        TypeEnum[TypeEnum["Hybrid"] = 'Hybrid'] = "Hybrid";
    })(Reservation.TypeEnum || (Reservation.TypeEnum = {}));
    var TypeEnum = Reservation.TypeEnum;
})(Reservation = exports.Reservation || (exports.Reservation = {}));

},{}],7:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./OnlineAvailability'));
__export(require('./Reservation'));

},{"./OnlineAvailability":5,"./Reservation":6}],"hostme-sdk-angular-web":[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./api/api'));
__export(require('./model/models'));
var AuthorizationService_1 = require('./client/AuthorizationService');
exports.AuthorizationService = AuthorizationService_1.AuthorizationService;

},{"./api/api":2,"./client/AuthorizationService":4,"./model/models":7}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2xpYi9hcGkvV2ViUmVzZXJ2YXRpb25zQXBpLmpzIiwiZGlzdC9saWIvYXBpL2FwaS5qcyIsImRpc3QvbGliL2FwaS9hdXRoLmpzIiwiZGlzdC9saWIvY2xpZW50L0F1dGhvcml6YXRpb25TZXJ2aWNlLmpzIiwiZGlzdC9saWIvbW9kZWwvT25saW5lQXZhaWxhYmlsaXR5LmpzIiwiZGlzdC9saWIvbW9kZWwvUmVzZXJ2YXRpb24uanMiLCJkaXN0L2xpYi9tb2RlbC9tb2RlbHMuanMiLCJkaXN0L2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgYXV0aCA9IHJlcXVpcmUoJy4vYXV0aCcpO1xyXG4ndXNlIHN0cmljdCc7XHJcbnZhciBXZWJSZXNlcnZhdGlvbnNBcGkgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gV2ViUmVzZXJ2YXRpb25zQXBpKCRodHRwLCBjb25maWcsICRodHRwUGFyYW1TZXJpYWxpemVyKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuJGh0dHBQYXJhbVNlcmlhbGl6ZXIgPSAkaHR0cFBhcmFtU2VyaWFsaXplcjtcclxuICAgICAgICB0aGlzLmRlZmF1bHRIZWFkZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICdkZWZhdWx0JzogbmV3IGF1dGguVm9pZEF1dGgoKSxcclxuICAgICAgICAgICAgJ29hdXRoMic6IG5ldyBhdXRoLk9BdXRoKCksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWJSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLCBcImFjY2Vzc1Rva2VuXCIsIHtcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYWNjZXNzVG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFdlYlJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZXh0ZW5kT2JqID0gZnVuY3Rpb24gKG9iakEsIG9iakIpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqQikge1xyXG4gICAgICAgICAgICBpZiAob2JqQi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmpBW2tleV0gPSBvYmpCW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iakE7XHJcbiAgICB9O1xyXG4gICAgV2ViUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZS5hZGROZXdSZXNlcnZhdGlvbiA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIHZhbHVlLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L3dlYi9yZXN0YXVyYW50cy97cmVzdGF1cmFudElkfS9yZXNlcnZhdGlvbnMnXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGFkZE5ld1Jlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciB2YWx1ZSB3aGVuIGNhbGxpbmcgYWRkTmV3UmVzZXJ2YXRpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIFdlYlJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZmluZFJlc3RhdXJhbnRzID0gZnVuY3Rpb24gKGxhdCwgbG9uLCBuYW1lLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGxvY2FsVmFyUGF0aCA9IHRoaXMuY29uZmlnLmJhc2VQYXRoICsgJy9hcGkvcnN2L3dlYi9yZXN0YXVyYW50cy9maW5kJztcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAobGF0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydsYXQnXSA9IGxhdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snbG9uJ10gPSBsb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWyduYW1lJ10gPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIFdlYlJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuZ2V0UmVzZXJ2YXRpb25BdmFpbGFiaWxpdHkgPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCBkYXRlLCBwYXJ0eVNpemUsIHJhbmdlSW5NaW51dGVzLCBhcmVhcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi93ZWIvcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vYXZhaWxhYmlsaXR5J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRSZXNlcnZhdGlvbkF2YWlsYWJpbGl0eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBkYXRlIHdoZW4gY2FsbGluZyBnZXRSZXNlcnZhdGlvbkF2YWlsYWJpbGl0eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXBhcnR5U2l6ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHBhcnR5U2l6ZSB3aGVuIGNhbGxpbmcgZ2V0UmVzZXJ2YXRpb25BdmFpbGFiaWxpdHknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyYW5nZUluTWludXRlcykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJhbmdlSW5NaW51dGVzIHdoZW4gY2FsbGluZyBnZXRSZXNlcnZhdGlvbkF2YWlsYWJpbGl0eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snZGF0ZSddID0gZGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhcnR5U2l6ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sncGFydHlTaXplJ10gPSBwYXJ0eVNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyYW5nZUluTWludXRlcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1sncmFuZ2VJbk1pbnV0ZXMnXSA9IHJhbmdlSW5NaW51dGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJlYXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2FyZWFzJ10gPSBhcmVhcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBXZWJSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmdldFJlc3RhdXJhbnRCeUlkID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi93ZWIvcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0nXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKCd7JyArICdyZXN0YXVyYW50SWQnICsgJ30nLCBTdHJpbmcocmVzdGF1cmFudElkKSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKCFyZXN0YXVyYW50SWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByZXN0YXVyYW50SWQgd2hlbiBjYWxsaW5nIGdldFJlc3RhdXJhbnRCeUlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgV2ViUmVzZXJ2YXRpb25zQXBpLiRpbmplY3QgPSBbJyRodHRwJywgJ0lBcGlDb25maWcnLCAnJGh0dHBQYXJhbVNlcmlhbGl6ZXInXTtcclxuICAgIHJldHVybiBXZWJSZXNlcnZhdGlvbnNBcGk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuV2ViUmVzZXJ2YXRpb25zQXBpID0gV2ViUmVzZXJ2YXRpb25zQXBpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1XZWJSZXNlcnZhdGlvbnNBcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKCcuL1dlYlJlc2VydmF0aW9uc0FwaScpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBpLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgSHR0cEJhc2ljQXV0aCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBIdHRwQmFzaWNBdXRoKCkge1xyXG4gICAgfVxyXG4gICAgSHR0cEJhc2ljQXV0aC5wcm90b3R5cGUuYXBwbHlUb1JlcXVlc3QgPSBmdW5jdGlvbiAoaHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICBodHRwUmVxdWVzdFBhcmFtcy5hdXRoID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSwgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBIdHRwQmFzaWNBdXRoO1xyXG59KCkpO1xyXG5leHBvcnRzLkh0dHBCYXNpY0F1dGggPSBIdHRwQmFzaWNBdXRoO1xyXG52YXIgQXBpS2V5QXV0aCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBcGlLZXlBdXRoKGxvY2F0aW9uLCBwYXJhbU5hbWUpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgdGhpcy5wYXJhbU5hbWUgPSBwYXJhbU5hbWU7XHJcbiAgICB9XHJcbiAgICBBcGlLZXlBdXRoLnByb3RvdHlwZS5hcHBseVRvUmVxdWVzdCA9IGZ1bmN0aW9uIChodHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2F0aW9uID09PSAncXVlcnknKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zLnFzW3RoaXMucGFyYW1OYW1lXSA9IHRoaXMuYXBpS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmxvY2F0aW9uID09PSAnaGVhZGVyJykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcy5oZWFkZXJzW3RoaXMucGFyYW1OYW1lXSA9IHRoaXMuYXBpS2V5O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gQXBpS2V5QXV0aDtcclxufSgpKTtcclxuZXhwb3J0cy5BcGlLZXlBdXRoID0gQXBpS2V5QXV0aDtcclxudmFyIE9BdXRoID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE9BdXRoKCkge1xyXG4gICAgfVxyXG4gICAgT0F1dGgucHJvdG90eXBlLmFwcGx5VG9SZXF1ZXN0ID0gZnVuY3Rpb24gKGh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NUb2tlbjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gT0F1dGg7XHJcbn0oKSk7XHJcbmV4cG9ydHMuT0F1dGggPSBPQXV0aDtcclxudmFyIFZvaWRBdXRoID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZvaWRBdXRoKCkge1xyXG4gICAgfVxyXG4gICAgVm9pZEF1dGgucHJvdG90eXBlLmFwcGx5VG9SZXF1ZXN0ID0gZnVuY3Rpb24gKGh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZvaWRBdXRoO1xyXG59KCkpO1xyXG5leHBvcnRzLlZvaWRBdXRoID0gVm9pZEF1dGg7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWF1dGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBBdXRob3JpemF0aW9uU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBdXRob3JpemF0aW9uU2VydmljZSgkaHR0cCwgJHEsIGNvbmZpZywgJGh0dHBQYXJhbVNlcmlhbGl6ZXIpIHtcclxuICAgICAgICB0aGlzLiRodHRwID0gJGh0dHA7XHJcbiAgICAgICAgdGhpcy4kcSA9ICRxO1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuJGh0dHBQYXJhbVNlcmlhbGl6ZXIgPSAkaHR0cFBhcmFtU2VyaWFsaXplcjtcclxuICAgICAgICB0aGlzLmRlZmF1bHRIZWFkZXJzID0ge307XHJcbiAgICB9XHJcbiAgICBBdXRob3JpemF0aW9uU2VydmljZS5wcm90b3R5cGUuQXV0aG9yaXplID0gZnVuY3Rpb24gKGFwaSwgdXNlck5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIGRlZmZlciA9IHRoaXMuJHEuZGVmZXIoKTtcclxuICAgICAgICB0aGlzLmdldFRva2VuKHVzZXJOYW1lLCBwYXNzd29yZCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgYXBpLmF1dGhlbnRpY2F0aW9ucy5vYXV0aDIuYWNjZXNzVG9rZW4gPSByZXNwb25zZS5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgIGRlZmZlci5yZXNvbHZlKCk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBkZWZmZXIucmVqZWN0KHBhcmFtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmZlci5wcm9taXNlO1xyXG4gICAgfTtcclxuICAgIEF1dGhvcml6YXRpb25TZXJ2aWNlLnByb3RvdHlwZS5nZXRUb2tlbiA9IGZ1bmN0aW9uICh1c2VyTmFtZSwgcGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgZGVmZmVyID0gdGhpcy4kcS5kZWZlcigpO1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvVG9rZW4nO1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyB9O1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJOYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGdyYW50X3R5cGU6ICdwYXNzd29yZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyKHZhbHVlKSxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBkZWZmZXIucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGVmZmVyLnByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgO1xyXG4gICAgQXV0aG9yaXphdGlvblNlcnZpY2UuJGluamVjdCA9IFsnJGh0dHAnLCAnJHEnLCAnSUFwaUNvbmZpZycsICckaHR0cFBhcmFtU2VyaWFsaXplciddO1xyXG4gICAgcmV0dXJuIEF1dGhvcml6YXRpb25TZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkF1dGhvcml6YXRpb25TZXJ2aWNlID0gQXV0aG9yaXphdGlvblNlcnZpY2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUF1dGhvcml6YXRpb25TZXJ2aWNlLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcclxudmFyIE9ubGluZUF2YWlsYWJpbGl0eTtcclxuKGZ1bmN0aW9uIChPbmxpbmVBdmFpbGFiaWxpdHkpIHtcclxuICAgIChmdW5jdGlvbiAoQXZhaWxhYmlsaXR5TGV2ZWxFbnVtKSB7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIkF2YWlsYWJsZVwiXSA9ICdBdmFpbGFibGUnXSA9IFwiQXZhaWxhYmxlXCI7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIkF2YWlsYWJsZUZvcldhaXRcIl0gPSAnQXZhaWxhYmxlRm9yV2FpdCddID0gXCJBdmFpbGFibGVGb3JXYWl0XCI7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIk5vdEVub3VnaENvdmVyc1wiXSA9ICdOb3RFbm91Z2hDb3ZlcnMnXSA9IFwiTm90RW5vdWdoQ292ZXJzXCI7XHJcbiAgICAgICAgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtW0F2YWlsYWJpbGl0eUxldmVsRW51bVtcIk92ZXJib29rZWRcIl0gPSAnT3ZlcmJvb2tlZCddID0gXCJPdmVyYm9va2VkXCI7XHJcbiAgICB9KShPbmxpbmVBdmFpbGFiaWxpdHkuQXZhaWxhYmlsaXR5TGV2ZWxFbnVtIHx8IChPbmxpbmVBdmFpbGFiaWxpdHkuQXZhaWxhYmlsaXR5TGV2ZWxFbnVtID0ge30pKTtcclxuICAgIHZhciBBdmFpbGFiaWxpdHlMZXZlbEVudW0gPSBPbmxpbmVBdmFpbGFiaWxpdHkuQXZhaWxhYmlsaXR5TGV2ZWxFbnVtO1xyXG59KShPbmxpbmVBdmFpbGFiaWxpdHkgPSBleHBvcnRzLk9ubGluZUF2YWlsYWJpbGl0eSB8fCAoZXhwb3J0cy5PbmxpbmVBdmFpbGFiaWxpdHkgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1PbmxpbmVBdmFpbGFiaWxpdHkuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgUmVzZXJ2YXRpb247XHJcbihmdW5jdGlvbiAoUmVzZXJ2YXRpb24pIHtcclxuICAgIChmdW5jdGlvbiAoVHlwZUVudW0pIHtcclxuICAgICAgICBUeXBlRW51bVtUeXBlRW51bVtcIlN0YW5kYXJkXCJdID0gJ1N0YW5kYXJkJ10gPSBcIlN0YW5kYXJkXCI7XHJcbiAgICAgICAgVHlwZUVudW1bVHlwZUVudW1bXCJIeWJyaWRcIl0gPSAnSHlicmlkJ10gPSBcIkh5YnJpZFwiO1xyXG4gICAgfSkoUmVzZXJ2YXRpb24uVHlwZUVudW0gfHwgKFJlc2VydmF0aW9uLlR5cGVFbnVtID0ge30pKTtcclxuICAgIHZhciBUeXBlRW51bSA9IFJlc2VydmF0aW9uLlR5cGVFbnVtO1xyXG59KShSZXNlcnZhdGlvbiA9IGV4cG9ydHMuUmVzZXJ2YXRpb24gfHwgKGV4cG9ydHMuUmVzZXJ2YXRpb24gPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZXNlcnZhdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gX19leHBvcnQobSkge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vT25saW5lQXZhaWxhYmlsaXR5JykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL1Jlc2VydmF0aW9uJykpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2RlbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKCcuL2FwaS9hcGknKSk7XHJcbl9fZXhwb3J0KHJlcXVpcmUoJy4vbW9kZWwvbW9kZWxzJykpO1xyXG52YXIgQXV0aG9yaXphdGlvblNlcnZpY2VfMSA9IHJlcXVpcmUoJy4vY2xpZW50L0F1dGhvcml6YXRpb25TZXJ2aWNlJyk7XHJcbmV4cG9ydHMuQXV0aG9yaXphdGlvblNlcnZpY2UgPSBBdXRob3JpemF0aW9uU2VydmljZV8xLkF1dGhvcml6YXRpb25TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiXX0=
return require('hostme-sdk-angular-web');
});