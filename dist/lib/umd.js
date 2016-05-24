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
        }, function (err) {
            deffer.reject(err);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkaXN0L2xpYi9hcGkvV2ViUmVzZXJ2YXRpb25zQXBpLmpzIiwiZGlzdC9saWIvYXBpL2FwaS5qcyIsImRpc3QvbGliL2FwaS9hdXRoLmpzIiwiZGlzdC9saWIvY2xpZW50L0F1dGhvcml6YXRpb25TZXJ2aWNlLmpzIiwiZGlzdC9saWIvbW9kZWwvT25saW5lQXZhaWxhYmlsaXR5LmpzIiwiZGlzdC9saWIvbW9kZWwvUmVzZXJ2YXRpb24uanMiLCJkaXN0L2xpYi9tb2RlbC9tb2RlbHMuanMiLCJkaXN0L2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIGF1dGggPSByZXF1aXJlKCcuL2F1dGgnKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgV2ViUmVzZXJ2YXRpb25zQXBpID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdlYlJlc2VydmF0aW9uc0FwaSgkaHR0cCwgY29uZmlnLCAkaHR0cFBhcmFtU2VyaWFsaXplcikge1xyXG4gICAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyID0gJGh0dHBQYXJhbVNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zID0ge1xyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IG5ldyBhdXRoLlZvaWRBdXRoKCksXHJcbiAgICAgICAgICAgICdvYXV0aDInOiBuZXcgYXV0aC5PQXV0aCgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2ViUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZSwgXCJhY2Nlc3NUb2tlblwiLCB7XHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFjY2Vzc1Rva2VuID0gdG9rZW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBXZWJSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmV4dGVuZE9iaiA9IGZ1bmN0aW9uIChvYmpBLCBvYmpCKSB7XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iakIpIHtcclxuICAgICAgICAgICAgaWYgKG9iakIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgb2JqQVtrZXldID0gb2JqQltrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpBO1xyXG4gICAgfTtcclxuICAgIFdlYlJlc2VydmF0aW9uc0FwaS5wcm90b3R5cGUuYWRkTmV3UmVzZXJ2YXRpb24gPSBmdW5jdGlvbiAocmVzdGF1cmFudElkLCB2YWx1ZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi93ZWIvcmVzdGF1cmFudHMve3Jlc3RhdXJhbnRJZH0vcmVzZXJ2YXRpb25zJ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBhZGROZXdSZXNlcnZhdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgdmFsdWUgd2hlbiBjYWxsaW5nIGFkZE5ld1Jlc2VydmF0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiB2YWx1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBXZWJSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmZpbmRSZXN0YXVyYW50cyA9IGZ1bmN0aW9uIChsYXQsIGxvbiwgbmFtZSwgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIHZhciBsb2NhbFZhclBhdGggPSB0aGlzLmNvbmZpZy5iYXNlUGF0aCArICcvYXBpL3Jzdi93ZWIvcmVzdGF1cmFudHMvZmluZCc7XHJcbiAgICAgICAgdmFyIHF1ZXJ5UGFyYW1ldGVycyA9IHt9O1xyXG4gICAgICAgIHZhciBoZWFkZXJQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaih7fSwgdGhpcy5kZWZhdWx0SGVhZGVycyk7XHJcbiAgICAgICAgaWYgKGxhdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snbGF0J10gPSBsYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2xvbiddID0gbG9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snbmFtZSddID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0UGFyYW1zID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMgPSB0aGlzLmV4dGVuZE9iaihodHRwUmVxdWVzdFBhcmFtcywgZXh0cmFIdHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25zLmRlZmF1bHQuYXBwbHlUb1JlcXVlc3QoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRodHRwKGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgIH07XHJcbiAgICBXZWJSZXNlcnZhdGlvbnNBcGkucHJvdG90eXBlLmdldFJlc2VydmF0aW9uQXZhaWxhYmlsaXR5ID0gZnVuY3Rpb24gKHJlc3RhdXJhbnRJZCwgZGF0ZSwgcGFydHlTaXplLCByYW5nZUluTWludXRlcywgYXJlYXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3Yvd2ViL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9L2F2YWlsYWJpbGl0eSdcclxuICAgICAgICAgICAgLnJlcGxhY2UoJ3snICsgJ3Jlc3RhdXJhbnRJZCcgKyAnfScsIFN0cmluZyhyZXN0YXVyYW50SWQpKTtcclxuICAgICAgICB2YXIgcXVlcnlQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdmFyIGhlYWRlclBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKHt9LCB0aGlzLmRlZmF1bHRIZWFkZXJzKTtcclxuICAgICAgICBpZiAoIXJlc3RhdXJhbnRJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmVxdWlyZWQgcGFyYW1ldGVyIHJlc3RhdXJhbnRJZCB3aGVuIGNhbGxpbmcgZ2V0UmVzZXJ2YXRpb25BdmFpbGFiaWxpdHknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgZGF0ZSB3aGVuIGNhbGxpbmcgZ2V0UmVzZXJ2YXRpb25BdmFpbGFiaWxpdHknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFwYXJ0eVNpemUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciBwYXJ0eVNpemUgd2hlbiBjYWxsaW5nIGdldFJlc2VydmF0aW9uQXZhaWxhYmlsaXR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmFuZ2VJbk1pbnV0ZXMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIHBhcmFtZXRlciByYW5nZUluTWludXRlcyB3aGVuIGNhbGxpbmcgZ2V0UmVzZXJ2YXRpb25BdmFpbGFiaWxpdHknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ2RhdGUnXSA9IGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYXJ0eVNpemUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3BhcnR5U2l6ZSddID0gcGFydHlTaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmFuZ2VJbk1pbnV0ZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ3JhbmdlSW5NaW51dGVzJ10gPSByYW5nZUluTWludXRlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyZWFzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzWydhcmVhcyddID0gYXJlYXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdFBhcmFtcyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiBsb2NhbFZhclBhdGgsXHJcbiAgICAgICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zID0gdGhpcy5leHRlbmRPYmooaHR0cFJlcXVlc3RQYXJhbXMsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9ucy5kZWZhdWx0LmFwcGx5VG9SZXF1ZXN0KGh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICB9O1xyXG4gICAgV2ViUmVzZXJ2YXRpb25zQXBpLnByb3RvdHlwZS5nZXRSZXN0YXVyYW50QnlJZCA9IGZ1bmN0aW9uIChyZXN0YXVyYW50SWQsIGV4dHJhSHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL2FwaS9yc3Yvd2ViL3Jlc3RhdXJhbnRzL3tyZXN0YXVyYW50SWR9J1xyXG4gICAgICAgICAgICAucmVwbGFjZSgneycgKyAncmVzdGF1cmFudElkJyArICd9JywgU3RyaW5nKHJlc3RhdXJhbnRJZCkpO1xyXG4gICAgICAgIHZhciBxdWVyeVBhcmFtZXRlcnMgPSB7fTtcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0gdGhpcy5leHRlbmRPYmooe30sIHRoaXMuZGVmYXVsdEhlYWRlcnMpO1xyXG4gICAgICAgIGlmICghcmVzdGF1cmFudElkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBwYXJhbWV0ZXIgcmVzdGF1cmFudElkIHdoZW4gY2FsbGluZyBnZXRSZXN0YXVyYW50QnlJZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogbG9jYWxWYXJQYXRoLFxyXG4gICAgICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1zXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoZXh0cmFIdHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcyA9IHRoaXMuZXh0ZW5kT2JqKGh0dHBSZXF1ZXN0UGFyYW1zLCBleHRyYUh0dHBSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbnMuZGVmYXVsdC5hcHBseVRvUmVxdWVzdChodHRwUmVxdWVzdFBhcmFtcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJGh0dHAoaHR0cFJlcXVlc3RQYXJhbXMpO1xyXG4gICAgfTtcclxuICAgIFdlYlJlc2VydmF0aW9uc0FwaS4kaW5qZWN0ID0gWyckaHR0cCcsICdJQXBpQ29uZmlnJywgJyRodHRwUGFyYW1TZXJpYWxpemVyJ107XHJcbiAgICByZXR1cm4gV2ViUmVzZXJ2YXRpb25zQXBpO1xyXG59KCkpO1xyXG5leHBvcnRzLldlYlJlc2VydmF0aW9uc0FwaSA9IFdlYlJlc2VydmF0aW9uc0FwaTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2ViUmVzZXJ2YXRpb25zQXBpLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZSgnLi9XZWJSZXNlcnZhdGlvbnNBcGknKSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIEh0dHBCYXNpY0F1dGggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gSHR0cEJhc2ljQXV0aCgpIHtcclxuICAgIH1cclxuICAgIEh0dHBCYXNpY0F1dGgucHJvdG90eXBlLmFwcGx5VG9SZXF1ZXN0ID0gZnVuY3Rpb24gKGh0dHBSZXF1ZXN0UGFyYW1zKSB7XHJcbiAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMuYXV0aCA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gSHR0cEJhc2ljQXV0aDtcclxufSgpKTtcclxuZXhwb3J0cy5IdHRwQmFzaWNBdXRoID0gSHR0cEJhc2ljQXV0aDtcclxudmFyIEFwaUtleUF1dGggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXBpS2V5QXV0aChsb2NhdGlvbiwgcGFyYW1OYW1lKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG4gICAgICAgIHRoaXMucGFyYW1OYW1lID0gcGFyYW1OYW1lO1xyXG4gICAgfVxyXG4gICAgQXBpS2V5QXV0aC5wcm90b3R5cGUuYXBwbHlUb1JlcXVlc3QgPSBmdW5jdGlvbiAoaHR0cFJlcXVlc3RQYXJhbXMpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhdGlvbiA9PT0gJ3F1ZXJ5Jykge1xyXG4gICAgICAgICAgICBodHRwUmVxdWVzdFBhcmFtcy5xc1t0aGlzLnBhcmFtTmFtZV0gPSB0aGlzLmFwaUtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5sb2NhdGlvbiA9PT0gJ2hlYWRlcicpIHtcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3RQYXJhbXMuaGVhZGVyc1t0aGlzLnBhcmFtTmFtZV0gPSB0aGlzLmFwaUtleTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFwaUtleUF1dGg7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQXBpS2V5QXV0aCA9IEFwaUtleUF1dGg7XHJcbnZhciBPQXV0aCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBPQXV0aCgpIHtcclxuICAgIH1cclxuICAgIE9BdXRoLnByb3RvdHlwZS5hcHBseVRvUmVxdWVzdCA9IGZ1bmN0aW9uIChodHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0UGFyYW1zLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIHRoaXMuYWNjZXNzVG9rZW47XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE9BdXRoO1xyXG59KCkpO1xyXG5leHBvcnRzLk9BdXRoID0gT0F1dGg7XHJcbnZhciBWb2lkQXV0aCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWb2lkQXV0aCgpIHtcclxuICAgIH1cclxuICAgIFZvaWRBdXRoLnByb3RvdHlwZS5hcHBseVRvUmVxdWVzdCA9IGZ1bmN0aW9uIChodHRwUmVxdWVzdFBhcmFtcykge1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWb2lkQXV0aDtcclxufSgpKTtcclxuZXhwb3J0cy5Wb2lkQXV0aCA9IFZvaWRBdXRoO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgQXV0aG9yaXphdGlvblNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQXV0aG9yaXphdGlvblNlcnZpY2UoJGh0dHAsICRxLCBjb25maWcsICRodHRwUGFyYW1TZXJpYWxpemVyKSB7XHJcbiAgICAgICAgdGhpcy4kaHR0cCA9ICRodHRwO1xyXG4gICAgICAgIHRoaXMuJHEgPSAkcTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLiRodHRwUGFyYW1TZXJpYWxpemVyID0gJGh0dHBQYXJhbVNlcmlhbGl6ZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVhZGVycyA9IHt9O1xyXG4gICAgfVxyXG4gICAgQXV0aG9yaXphdGlvblNlcnZpY2UucHJvdG90eXBlLkF1dGhvcml6ZSA9IGZ1bmN0aW9uIChhcGksIHVzZXJOYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHZhciBkZWZmZXIgPSB0aGlzLiRxLmRlZmVyKCk7XHJcbiAgICAgICAgdGhpcy5nZXRUb2tlbih1c2VyTmFtZSwgcGFzc3dvcmQpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGFwaS5hdXRoZW50aWNhdGlvbnMub2F1dGgyLmFjY2Vzc1Rva2VuID0gcmVzcG9uc2UuYWNjZXNzX3Rva2VuO1xyXG4gICAgICAgICAgICBkZWZmZXIucmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgZGVmZmVyLnJlamVjdChwYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkZWZmZXIucHJvbWlzZTtcclxuICAgIH07XHJcbiAgICBBdXRob3JpemF0aW9uU2VydmljZS5wcm90b3R5cGUuZ2V0VG9rZW4gPSBmdW5jdGlvbiAodXNlck5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIGRlZmZlciA9IHRoaXMuJHEuZGVmZXIoKTtcclxuICAgICAgICB2YXIgbG9jYWxWYXJQYXRoID0gdGhpcy5jb25maWcuYmFzZVBhdGggKyAnL1Rva2VuJztcclxuICAgICAgICB2YXIgaGVhZGVyUGFyYW1zID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcgfTtcclxuICAgICAgICB2YXIgdmFsdWUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBncmFudF90eXBlOiAncGFzc3dvcmQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3RQYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IGxvY2FsVmFyUGF0aCxcclxuICAgICAgICAgICAganNvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YTogdGhpcy4kaHR0cFBhcmFtU2VyaWFsaXplcih2YWx1ZSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy4kaHR0cChodHRwUmVxdWVzdFBhcmFtcykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZmVyLnJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBkZWZmZXIucmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmZlci5wcm9taXNlO1xyXG4gICAgfTtcclxuICAgIDtcclxuICAgIEF1dGhvcml6YXRpb25TZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRxJywgJ0lBcGlDb25maWcnLCAnJGh0dHBQYXJhbVNlcmlhbGl6ZXInXTtcclxuICAgIHJldHVybiBBdXRob3JpemF0aW9uU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0cy5BdXRob3JpemF0aW9uU2VydmljZSA9IEF1dGhvcml6YXRpb25TZXJ2aWNlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BdXRob3JpemF0aW9uU2VydmljZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XHJcbnZhciBPbmxpbmVBdmFpbGFiaWxpdHk7XHJcbihmdW5jdGlvbiAoT25saW5lQXZhaWxhYmlsaXR5KSB7XHJcbiAgICAoZnVuY3Rpb24gKEF2YWlsYWJpbGl0eUxldmVsRW51bSkge1xyXG4gICAgICAgIEF2YWlsYWJpbGl0eUxldmVsRW51bVtBdmFpbGFiaWxpdHlMZXZlbEVudW1bXCJBdmFpbGFibGVcIl0gPSAnQXZhaWxhYmxlJ10gPSBcIkF2YWlsYWJsZVwiO1xyXG4gICAgICAgIEF2YWlsYWJpbGl0eUxldmVsRW51bVtBdmFpbGFiaWxpdHlMZXZlbEVudW1bXCJBdmFpbGFibGVGb3JXYWl0XCJdID0gJ0F2YWlsYWJsZUZvcldhaXQnXSA9IFwiQXZhaWxhYmxlRm9yV2FpdFwiO1xyXG4gICAgICAgIEF2YWlsYWJpbGl0eUxldmVsRW51bVtBdmFpbGFiaWxpdHlMZXZlbEVudW1bXCJOb3RFbm91Z2hDb3ZlcnNcIl0gPSAnTm90RW5vdWdoQ292ZXJzJ10gPSBcIk5vdEVub3VnaENvdmVyc1wiO1xyXG4gICAgICAgIEF2YWlsYWJpbGl0eUxldmVsRW51bVtBdmFpbGFiaWxpdHlMZXZlbEVudW1bXCJPdmVyYm9va2VkXCJdID0gJ092ZXJib29rZWQnXSA9IFwiT3ZlcmJvb2tlZFwiO1xyXG4gICAgfSkoT25saW5lQXZhaWxhYmlsaXR5LkF2YWlsYWJpbGl0eUxldmVsRW51bSB8fCAoT25saW5lQXZhaWxhYmlsaXR5LkF2YWlsYWJpbGl0eUxldmVsRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgQXZhaWxhYmlsaXR5TGV2ZWxFbnVtID0gT25saW5lQXZhaWxhYmlsaXR5LkF2YWlsYWJpbGl0eUxldmVsRW51bTtcclxufSkoT25saW5lQXZhaWxhYmlsaXR5ID0gZXhwb3J0cy5PbmxpbmVBdmFpbGFiaWxpdHkgfHwgKGV4cG9ydHMuT25saW5lQXZhaWxhYmlsaXR5ID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T25saW5lQXZhaWxhYmlsaXR5LmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcclxudmFyIFJlc2VydmF0aW9uO1xyXG4oZnVuY3Rpb24gKFJlc2VydmF0aW9uKSB7XHJcbiAgICAoZnVuY3Rpb24gKFR5cGVFbnVtKSB7XHJcbiAgICAgICAgVHlwZUVudW1bVHlwZUVudW1bXCJTdGFuZGFyZFwiXSA9ICdTdGFuZGFyZCddID0gXCJTdGFuZGFyZFwiO1xyXG4gICAgICAgIFR5cGVFbnVtW1R5cGVFbnVtW1wiSHlicmlkXCJdID0gJ0h5YnJpZCddID0gXCJIeWJyaWRcIjtcclxuICAgIH0pKFJlc2VydmF0aW9uLlR5cGVFbnVtIHx8IChSZXNlcnZhdGlvbi5UeXBlRW51bSA9IHt9KSk7XHJcbiAgICB2YXIgVHlwZUVudW0gPSBSZXNlcnZhdGlvbi5UeXBlRW51bTtcclxufSkoUmVzZXJ2YXRpb24gPSBleHBvcnRzLlJlc2VydmF0aW9uIHx8IChleHBvcnRzLlJlc2VydmF0aW9uID0ge30pKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVzZXJ2YXRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5fX2V4cG9ydChyZXF1aXJlKCcuL09ubGluZUF2YWlsYWJpbGl0eScpKTtcclxuX19leHBvcnQocmVxdWlyZSgnLi9SZXNlcnZhdGlvbicpKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kZWxzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuX19leHBvcnQocmVxdWlyZSgnLi9hcGkvYXBpJykpO1xyXG5fX2V4cG9ydChyZXF1aXJlKCcuL21vZGVsL21vZGVscycpKTtcclxudmFyIEF1dGhvcml6YXRpb25TZXJ2aWNlXzEgPSByZXF1aXJlKCcuL2NsaWVudC9BdXRob3JpemF0aW9uU2VydmljZScpO1xyXG5leHBvcnRzLkF1dGhvcml6YXRpb25TZXJ2aWNlID0gQXV0aG9yaXphdGlvblNlcnZpY2VfMS5BdXRob3JpemF0aW9uU2VydmljZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl19
return require('hostme-sdk-angular-web');
});