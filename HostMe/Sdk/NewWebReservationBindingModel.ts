
namespace HostMe.Sdk {
    'use strict';

    export interface NewWebReservationBindingModel {

        "reservationTime": Date;

        "customerName": string;

        "groupSize": number;

        "phoneNumber": string;

        "areas"?: string;

        "note"?: string;

        "tableNumber"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;
    }

}
