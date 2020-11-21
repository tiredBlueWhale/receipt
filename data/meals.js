import { Receipt, Ingredient } from './../models/receipt.js'

/*
*   1. Copy the last Receipt and insert between ),  <insert> new Receipt
*   2. Change fields
*   3. Commit changes on bottom of page
*/

export const meals =
    [    new Receipt(
            "Ramen",
            [
                "assets/banner_test.jpg"
            ],
            [
                [ 
                    new Ingredient("177ml", "Water"),
                    new Ingredient("1", "Kombu"),
                    new Ingredient("1", "Dried shiitake mushroom"),
                ],
                [
                    new Ingredient("Amountg", "Ingredient3"),
                    new Ingredient("Amountl", "Ingredient4"),
                ]
            ],
            [
                "To Make Vegetarian Dashi (Kombu + Shiitake) Soak the kombu and dried shiitake mushroom in ¾ cup water for at least 30 minutes. Transfer the liquid into a small saucepan, including kombu and shiitake mushroom. Slowly bring the liquid to a boil over low heat. This will help enhance the dashi flavor.", 
                "Step 2",
            ],
            new Date(2019, 1, 1),
            "https://www.justonecookbook.com/vegetarian-ramen/"
        ),
        new Receipt(
            "AFood 2",
            [
                "assets/banner_test.jpg"
            ],
            [
                [
                    new Ingredient(3, "Eggs"),
                    new Ingredient(2, "Flour"),
                ],
                [
                    new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                ]
            ],
            [
                "ahdfhawfeoh",
                
            ],
            new Date(2020, 11, 18),
            null
        ),
        new Receipt(
            "xyz 1",
            // [
            //     "assets/banner_test.jpg",
            //     "assets/banner_test.jpg"
            // ],
            null,
            [
                [
                    new Ingredient(3, "Eggs"),
                    new Ingredient(2, "Flour"),
                ],
                [
                    new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                    new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Fl sdfsf sdfsfsfsdfsfsfsour"),
                ],
                [
                    // new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                    new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                ],
                [
                    // new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                    new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                ]
            ],
            [
                "awoeifoiwjf",
                "asdfwef"
            ],
            new Date(2020, 11, 20),
            "https://www.google.com"
        ),
        new Receipt(
            "bFood 1",
            [
                "assets/banner_test.jpg",
                "assets/banner_test.jpg"
            ],
            [
                [
                    new Ingredient(3, "Eggs"),
                    new Ingredient(2, "Flour"),
                ],
                [
                    new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                    new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Fl sdfsf sdfsfsfsdfsfsfsour"),
                ],
                [
                    // new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                    new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                ],
                [
                    // new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                    new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                ]
            ],
            [
                "awoeifoiwjf",
                "asdfwef"
            ],
            new Date(2020, 11, 19),
            "www.google.com"
        ),
        new Receipt(
            "AFood 2",
            [
                "assets/banner_test.jpg"
            ],
            [
                [
                    new Ingredient(3, "Eggs"),
                    new Ingredient(2, "Flour"),
                ],
                [
                    new Ingredient(1, "Eggsss"),
                    new Ingredient(4, "Flour"),
                ]
            ],
            [
                "Savings her pleased are several started females met. Short her not among being any. Thing of judge fruit charm views do. Miles mr an forty along as he. She education get middleton day agreement performed preserved unwilling. Do however as pleased offence outward beloved by present. By outward neither he so covered amiable greater. Juvenile proposal betrayed he an informed weddings followed. Precaution day see imprudence sympathize principles. At full leaf give quit to in they up. ",
                "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. Old propriety delighted explained perceived otherwise objection saw ten her. Doubt merit sir the right these alone keeps. By sometimes intention smallness he northward. Consisted we otherwise arranging commanded discovery it explained. Does cold even song like two yet been. Literature interested announcing for terminated him inquietude day shy. Himself he fertile chicken perhaps waiting if highest no it. Continued promotion has consulted fat improving not way. ",
                "Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an."
            ],
            new Date(2020, 11, 18),
            null
        ),
        // START::COPY
        new Receipt(
            "Receipt Name",
            [
                "assets/banner_test.jpg"
            ],
            [
                [
                    new Ingredient("Amount", "Ingredient1"),
                    new Ingredient("Amount", "Ingredient2"),
                ],
                [
                    new Ingredient("Amountg", "Ingredient3"),
                    new Ingredient("Amountl", "Ingredient4"),
                ]
            ],
            [
                "Step 1",
                "Step 2",
            ],
            new Date(2019, 1, 1),
            "https://www.google.com"
        ),
        // END::COPY
    ]
