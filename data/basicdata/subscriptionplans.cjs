/*
    These are the base subscription plans to be added if the database if first used.
*/
module.exports = [
    {
        "planId": 1,
        "subscriptionPackage": "Essential",
        "price": 29.99,
        "oldPrice": 49.99,
        "billedPeriod": "Billed Monthly",
        "description": "For the home owner who is just starting out and needs to get basic security.",
        "subDescription": "Great for home security and small businesses.",
        "planContent": ["Up to 6 Cameras", "Movement detection", "24/7 Surveilence", "Mobile App", "IP Camera support", "HTTP Cameras support"],
        "maxCameras": 6
    },
    {
        "planId": 2,
        "subscriptionPackage": "Professional",
        "price": 49.99,
        "oldPrice": 69.99,
        "billedPeriod": "Billed Monthly",
        "description": "For the creator who is just starting out and needs to get their content out there.",
        "subDescription": "Amazing for large homes, and medium sized businesses and stores.",
        "planContent": ["Up to 12 Cameras", "Movement and weapon detection", "24/7 Surveilence", "Mobile App", "IP Camera support", "HTTP Cameras support"],
        "maxCameras": 12
    },
    {
        "planId": 3,
        "subscriptionPackage": "Enterprice",
        "price": 99.99,
        "oldPrice": 129.99,
        "billedPeriod": "Billed Monthly",
        "description": "For large businesses/locations that need the best there is.",
        "subDescription": "Amazing for large homes, and large sized businesses and stores.",
        "planContent": ["Unlimited Cameras", "Movement, Weapon and face detection", "24/7 Surveilence", "Mobile App", "IP Camera support", "HTTP Cameras support"],
        "maxCameras": 99
    },
    {
        "planId": 4,
        "subscriptionPackage": "Essential",
        "price": 19.99,
        "oldPrice": 39.99,
        "billedPeriod": "Billed Yearly",
        "description": "For the home owner who is just starting out and needs to get basic security.",
        "subDescription": "Great for home security and small businesses.",
        "planContent": ["Up to 6 Cameras", "Movement detection", "24/7 Surveilence", "Mobile App", "IP Camera support", "HTTP Cameras support"],
        "maxCameras": 6
    },
    {
        "planId": 5,
        "subscriptionPackage": "Professional",
        "price": 39.99,
        "oldPrice": 59.99,
        "billedPeriod": "Billed Yearly",
        "description": "For the creator who is just starting out and needs to get their content out there.",
        "subDescription": "Amazing for large homes, and medium sized businesses and stores.",
        "planContent": ["Up to 12 Cameras", "Movement and weapon detection", "24/7 Surveilence", "Mobile App", "IP Camera support", "HTTP Cameras support"],
        "maxCameras": 12
    },
    {
        "planId": 6,
        "subscriptionPackage": "Enterprice",
        "price": 79.99,
        "oldPrice": 109.99,
        "billedPeriod": "Billed Yearly",
        "description": "For large businesses/locations that need the best there is.",
        "subDescription": "Amazing for large homes, and large sized businesses and stores.",
        "planContent": ["Unlimited Cameras", "Movement, Weapon and face detection", "24/7 Surveilence", "Mobile App", "IP Camera support", "HTTP Cameras support"],
        "maxCameras": 99
    },
    {
        "planId": 7,
        "subscriptionPackage": "Free",
        "price": 0,
        "oldPrice": 0,
        "billedPeriod": "Billed Never",
        "description": "For large businesses/locations that need the best there is.",
        "subDescription": "Amazing for large homes, and large sized businesses and stores.",
        "planContent": ["Unlimited Cameras", "Movement, Weapon and face detection", "24/7 Surveilence", "Mobile App", "IP Camera support", "HTTP Cameras support"],
        "maxCameras": 3
    }
]
