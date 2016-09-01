#Angular SDK for HOstMe Admin APIs

##Get started:
```
npm install hostme-sdk-angular-web
```

##Find a table
Check restaurant availability for specific party size, date and time. This API method returns list of time slots with  availability information.

```
GET http://service.hostmeapp.com/api/rsv/web/restaurants/{restaurantId}/availability?date=2016-10-07T10%3A00%3A00-05%3A00&partySize=2&rangeInMinutes=360

[
  {
    "acceptReservations": true,
    "availabilityLevel": "Available",
    "open": true,
    "requestedTime": false,
    "time": "04:00:00"
  },
  {
    "acceptReservations": true,
    "availabilityLevel": "Available",
    "open": true,
    "requestedTime": false,
    "time": "04:10:00"
  },
  ....
]
```

##Book a table
Book a table passing time for available time slot - See previous method.
```
POST http://service.hostmeapp.com/api/rsv/web/restaurants/{restaurantId}/reservations
{
  "reservationTime": "2016-09-01T12:51:36.6119191+00:00",
  "customerName": "Evgeny",
  "phoneNumber": "+1 111-111-1111",
  "groupSize": 4,
  "note": "string",
  "highChair": true,
  "stroller": true,
  "party": true
}
```
