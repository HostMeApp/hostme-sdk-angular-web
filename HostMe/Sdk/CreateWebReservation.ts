
namespace HostMe.Sdk {
    'use strict';

    export interface CreateWebReservation {

        "reservationTime": Date;

        "customerName": string;

        "phoneNumber": string;

        "groupSize": number;

        "areas"?: string;

        "note"?: string;

        "highChair"?: boolean;

        "stroller"?: boolean;
    }

}
