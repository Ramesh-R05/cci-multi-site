//http://awwfood-site-au.sit.bxm.net.au/api/getPageContent?section=xmas&url=&path=%2Fxmas
import navigation from '../modules/navigation';
import latestTeasers from '../latestTeasers';

export default {
    entity: {
        id: 'AWWFOOD-31872',
        title: 'xmas',
        dateCreated: '2018-08-28T06:17:07.00Z',
        dateModified: '2018-10-10T06:18:49.192Z',
        imageFacebookUrl: {
            tags: [],
            source: '',
            credits: []
        },
        nodeType: 'CommercialTagSection',
        summary: 'We wish you a Merry Christmas We wish you a Merry Christmas We wish you a Merry Christmas and a Happy New Year',
        url: '/xmas',
        siteName: 'awwfood',
        siteUrl: 'http://awwfood-site-au.sit.bxm.net.au',
        tagsDetails: [
            {
                name: 'food:Main ingredient:Other:Chocolate',
                urlName: 'chocolate',
                fullName: 'food_Main_ingredient_Other_Chocolate',
                displayName: 'Chocolate'
            },
            {
                name: 'food:Main ingredient:Meat and poultry:Ham and bacon',
                urlName: 'ham-and-bacon',
                fullName: 'food_Main_ingredient_Meat_and_poultry_Ham_and_bacon',
                displayName: 'Ham and bacon'
            }
        ]
    },
    headerMetaData: {
        googleTagManagerEnvironment: 'sit',
        googleTagManagerMasthead: 'AWWFOOD',
        robots: 'NOINDEX,NOFOLLOW',
        canonicalUrl: 'http://awwfood-site-au.sit.bxm.net.au/xmas',
        pageDescription: 'We wish you a Merry Christmas We wish you a Merry Christmas We wish you a Merry Christmas and a Happy New Year',
        pageName: 'xmas',
        title: 'xmas'
    },
    headerNavigation: {
        items: [
            {
                id: 'AWWFOOD-1191',
                name: 'Recipes',
                dateCreated: '2018-08-27T05:01:50.00Z',
                nodeType: 'Section',
                url: '/recipes',
                parentName: 'Recipes',
                parentUrl: '/recipes',
                subsections: []
            },
            {
                id: 'AWWFOOD-31878',
                name: 'Healthy',
                dateCreated: '2018-08-28T07:15:28.00Z',
                nodeType: 'TagSection',
                summary:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word',
                url: '/healthy',
                parentName: 'Healthy',
                parentUrl: '/healthy',
                tagsDetails: [
                    {
                        name: 'food:Meal type:Healthy',
                        urlName: 'healthy',
                        fullName: 'food_Meal_type_Healthy',
                        displayName: 'Healthy'
                    }
                ],
                subsections: []
            },
            {
                id: 'AWWFOOD-31877',
                name: 'Baking',
                dateCreated: '2018-08-28T07:09:15.00Z',
                nodeType: 'CommercialTagSection',
                url: '/baking',
                tagsDetails: [
                    {
                        name: 'food:Skills and Techniques:General skills and techniques:Baking',
                        urlName: 'baking',
                        fullName: 'food_Skills_and_Techniques_General_skills_and_techniques_Baking',
                        displayName: 'Baking'
                    }
                ]
            },
            {
                id: 'AWWFOOD-31879',
                name: 'quick & easy',
                dateCreated: '2018-08-28T07:16:14.00Z',
                nodeType: 'TagSection',
                url: '/quick-and-easy',
                parentName: 'quick & easy',
                parentUrl: '/quick-and-easy',
                tagsDetails: [
                    {
                        name: 'food:Difficulty:Easy',
                        urlName: 'easy',
                        fullName: 'food_Difficulty_Easy',
                        displayName: 'Easy'
                    },
                    {
                        name: 'food:Cooking time:Less than 30 minutes',
                        urlName: 'less-than-30-minutes',
                        fullName: 'food_Cooking_time_Less_than_30_minutes',
                        displayName: 'Less than 30 minutes'
                    }
                ],
                subsections: []
            },
            {
                id: 'AWWFOOD-31880',
                name: 'in season',
                dateCreated: '2018-08-28T07:16:36.00Z',
                nodeType: 'TagSection',
                url: '/in-season',
                parentName: 'in season',
                parentUrl: '/in-season',
                tagsDetails: [
                    {
                        name: 'food:Main ingredient:Vegetables:Avocado',
                        urlName: 'avocado',
                        fullName: 'food_Main_ingredient_Vegetables_Avocado',
                        displayName: 'Avocado'
                    },
                    {
                        name: 'food:Main ingredient:Vegetables:Artichoke',
                        urlName: 'artichoke',
                        fullName: 'food_Main_ingredient_Vegetables_Artichoke',
                        displayName: 'Artichoke'
                    },
                    {
                        name: 'food:Main ingredient:Vegetables:Asparagus',
                        urlName: 'asparagus',
                        fullName: 'food_Main_ingredient_Vegetables_Asparagus',
                        displayName: 'Asparagus'
                    }
                ],
                subsections: []
            },
            {
                id: 'AWWFOOD-31872',
                name: 'xmas',
                dateCreated: '2018-08-28T06:17:07.00Z',
                nodeType: 'CommercialTagSection',
                summary: 'We wish you a Merry Christmas We wish you a Merry Christmas We wish you a Merry Christmas and a Happy New Year',
                url: '/xmas',
                tagsDetails: [
                    {
                        name: 'food:Main ingredient:Other:Chocolate',
                        urlName: 'chocolate',
                        fullName: 'food_Main_ingredient_Other_Chocolate',
                        displayName: 'Chocolate'
                    },
                    {
                        name: 'food:Main ingredient:Meat and poultry:Ham and bacon',
                        urlName: 'ham-and-bacon',
                        fullName: 'food_Main_ingredient_Meat_and_poultry_Ham_and_bacon',
                        displayName: 'Ham and bacon'
                    }
                ]
            },
            {
                id: 'AWWFOOD-31876',
                name: 'easter',
                dateCreated: '2018-08-28T07:09:14.00Z',
                nodeType: 'CommercialTagSection',
                url: '/easter',
                tagsDetails: [
                    {
                        name: 'food:Main ingredient:Other:Chocolate',
                        urlName: 'chocolate',
                        fullName: 'food_Main_ingredient_Other_Chocolate',
                        displayName: 'Chocolate'
                    }
                ]
            },
            {
                id: 'AWWFOOD-1192',
                name: 'In The Test Kitchen',
                dateCreated: '2018-08-27T05:01:51.00Z',
                nodeType: 'Section',
                url: '/in-the-test-kitchen',
                parentName: 'In The Test Kitchen',
                parentUrl: '/in-the-test-kitchen',
                subsections: [
                    {
                        id: 'AWWFOOD-1193',
                        url: '/how-to',
                        contentTitle: 'How To'
                    },
                    {
                        id: 'AWWFOOD-1194',
                        url: '/reviews',
                        contentTitle: 'Reviews'
                    },
                    {
                        id: 'AWWFOOD-1195',
                        url: '/quick-bites',
                        contentTitle: 'Quick Bites'
                    }
                ]
            }
        ]
    },
    hamburgerNavigation: {
        items: [
            {
                id: 'AWWFOOD-1191',
                name: 'Recipes',
                dateCreated: '2018-08-27T05:01:50.00Z',
                nodeType: 'Section',
                url: '/recipes',
                parentName: 'Recipes',
                parentUrl: '/recipes',
                subsections: []
            },
            {
                id: 'AWWFOOD-1192',
                name: 'In The Test Kitchen',
                dateCreated: '2018-08-27T05:01:51.00Z',
                nodeType: 'Section',
                url: '/in-the-test-kitchen',
                parentName: 'In The Test Kitchen',
                parentUrl: '/in-the-test-kitchen',
                subsections: [
                    {
                        id: 'AWWFOOD-1193',
                        url: '/how-to',
                        contentTitle: 'How To'
                    },
                    {
                        id: 'AWWFOOD-1194',
                        url: '/reviews',
                        contentTitle: 'Reviews'
                    },
                    {
                        id: 'AWWFOOD-1195',
                        url: '/quick-bites',
                        contentTitle: 'Quick Bites'
                    }
                ]
            },
            {
                id: 'AWWFOOD-31872',
                name: 'xmas',
                dateCreated: '2018-08-28T06:17:07.00Z',
                nodeType: 'CommercialTagSection',
                summary: 'We wish you a Merry Christmas We wish you a Merry Christmas We wish you a Merry Christmas and a Happy New Year',
                url: '/xmas',
                tagsDetails: [
                    {
                        name: 'food:Main ingredient:Other:Chocolate',
                        urlName: 'chocolate',
                        fullName: 'food_Main_ingredient_Other_Chocolate',
                        displayName: 'Chocolate'
                    },
                    {
                        name: 'food:Main ingredient:Meat and poultry:Ham and bacon',
                        urlName: 'ham-and-bacon',
                        fullName: 'food_Main_ingredient_Meat_and_poultry_Ham_and_bacon',
                        displayName: 'Ham and bacon'
                    }
                ]
            },
            {
                id: 'AWWFOOD-31876',
                name: 'easter',
                dateCreated: '2018-08-28T07:09:14.00Z',
                nodeType: 'CommercialTagSection',
                url: '/easter',
                tagsDetails: [
                    {
                        name: 'food:Main ingredient:Other:Chocolate',
                        urlName: 'chocolate',
                        fullName: 'food_Main_ingredient_Other_Chocolate',
                        displayName: 'Chocolate'
                    }
                ]
            },
            {
                id: 'AWWFOOD-31877',
                name: 'Baking',
                dateCreated: '2018-08-28T07:09:15.00Z',
                nodeType: 'CommercialTagSection',
                url: '/baking',
                tagsDetails: [
                    {
                        name: 'food:Skills and Techniques:General skills and techniques:Baking',
                        urlName: 'baking',
                        fullName: 'food_Skills_and_Techniques_General_skills_and_techniques_Baking',
                        displayName: 'Baking'
                    }
                ]
            },
            {
                id: 'AWWFOOD-31878',
                name: 'Healthy',
                dateCreated: '2018-08-28T07:15:28.00Z',
                nodeType: 'TagSection',
                summary:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word',
                url: '/healthy',
                parentName: 'Healthy',
                parentUrl: '/healthy',
                tagsDetails: [
                    {
                        name: 'food:Meal type:Healthy',
                        urlName: 'healthy',
                        fullName: 'food_Meal_type_Healthy',
                        displayName: 'Healthy'
                    }
                ],
                subsections: []
            },
            {
                id: 'AWWFOOD-31879',
                name: 'quick & easy',
                dateCreated: '2018-08-28T07:16:14.00Z',
                nodeType: 'TagSection',
                url: '/quick-and-easy',
                parentName: 'quick & easy',
                parentUrl: '/quick-and-easy',
                tagsDetails: [
                    {
                        name: 'food:Difficulty:Easy',
                        urlName: 'easy',
                        fullName: 'food_Difficulty_Easy',
                        displayName: 'Easy'
                    },
                    {
                        name: 'food:Cooking time:Less than 30 minutes',
                        urlName: 'less-than-30-minutes',
                        fullName: 'food_Cooking_time_Less_than_30_minutes',
                        displayName: 'Less than 30 minutes'
                    }
                ],
                subsections: []
            },
            {
                id: 'AWWFOOD-31880',
                name: 'in season',
                dateCreated: '2018-08-28T07:16:36.00Z',
                nodeType: 'TagSection',
                url: '/in-season',
                parentName: 'in season',
                parentUrl: '/in-season',
                tagsDetails: [
                    {
                        name: 'food:Main ingredient:Vegetables:Avocado',
                        urlName: 'avocado',
                        fullName: 'food_Main_ingredient_Vegetables_Avocado',
                        displayName: 'Avocado'
                    },
                    {
                        name: 'food:Main ingredient:Vegetables:Artichoke',
                        urlName: 'artichoke',
                        fullName: 'food_Main_ingredient_Vegetables_Artichoke',
                        displayName: 'Artichoke'
                    },
                    {
                        name: 'food:Main ingredient:Vegetables:Asparagus',
                        urlName: 'asparagus',
                        fullName: 'food_Main_ingredient_Vegetables_Asparagus',
                        displayName: 'Asparagus'
                    }
                ],
                subsections: []
            },
            {
                id: 'AWWFOOD-31883',
                name: 'myer',
                dateCreated: '2018-08-30T01:27:01.00Z',
                nodeType: 'CommercialTagSection',
                summary:
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightlyle believe",
                url: '/myer',
                tagsDetails: [
                    {
                        name: 'food:Dish type:Cupcake',
                        urlName: 'cupcake',
                        fullName: 'food_Dish_type_Cupcake',
                        displayName: 'Cupcake'
                    }
                ]
            }
        ]
    },
    footer: {},
    curatedHeroTeaser: {
        id: 'AWWFOOD-3826',
        title: 'Pork belly with pineapple salsa',
        shortTitle: 'Pork belly with pineapple salsa',
        dateCreated: '2018-01-02T01:07:12.00Z',
        imageUrl: 'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/02/34649/Pork-belly-with-pineapple-salsa-recipe.jpg',
        nodeType: 'Recipe',
        summary: 'Crispy-skin, succulent pork belly served with a fresh pineapple salsa makes a wonderful summer feast.',
        source: "Woman's Day",
        url: '/recipes/pork-belly-with-pineapple-salsa-3826',
        parentName: 'Recipes',
        parentUrl: '/recipes',
        tagsDetails: [
            {
                name: 'food:Main ingredient:Meat and poultry:Pork',
                urlName: 'pork',
                fullName: 'food_Main_ingredient_Meat_and_poultry_Pork',
                displayName: 'Pork'
            },
            {
                name: 'food:Main ingredient:Fruits and berries:Pineapple',
                urlName: 'pineapple',
                fullName: 'food_Main_ingredient_Fruits_and_berries_Pineapple',
                displayName: 'Pineapple'
            },
            {
                name: 'food:Dish type:Roast dinner',
                urlName: 'roast-dinner',
                fullName: 'food_Dish_type_Roast_dinner',
                displayName: 'Roast dinner'
            },
            {
                name: 'food:Difficulty:Moderate',
                urlName: 'moderate',
                fullName: 'food_Difficulty_Moderate',
                displayName: 'Moderate'
            },
            {
                name: 'food:Cuisine:Modern Australian',
                urlName: 'modern-australian',
                fullName: 'food_Cuisine_Modern_Australian',
                displayName: 'Modern Australian'
            },
            {
                name: 'food:Cooking time:More than 2 hours',
                urlName: 'more-than-2-hours',
                fullName: 'food_Cooking_time_More_than_2_hours',
                displayName: 'More than 2 hours'
            }
        ]
    },
    mustRead: [
        {
            id: 'AWWFOOD-1219',
            title: 'Cooking oils: your guide to every type on the shelf',
            shortTitle: 'Cooking oils: your guide to every type on the shelf',
            dateCreated: '2017-07-19T05:00:00.00Z',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/03/06/4472/OIL-(1).jpg',
            nodeType: 'Article',
            summary:
                "Not all cooking oils were created equal. Does coconut oil have more health benefits that extra virgin olive oil? Are you using oil correctly? Let's break it down.",
            source: "Australian Women's Weekly",
            url: '/cooking-oils-guide-difference-1219',
            parentName: 'Home',
            parentUrl: '/'
        },
        {
            id: 'AWWFOOD-30838',
            title: 'The best birthday cakes for little boys',
            shortTitle: 'The best birthday cakes for little boys',
            dateCreated: '2015-12-16T04:44:00.00Z',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/12/16/31238/Boy-art.jpg',
            nodeType: 'Gallery',
            summary: "It's birthday time again!",
            source: 'Food To Love',
            url: '/the-best-birthday-cakes-for-little-boys-30838',
            parentName: 'Home',
            parentUrl: '/',
            tagsDetails: [
                {
                    name: 'food:Dish type:Cake',
                    urlName: 'cake',
                    fullName: 'food_Dish_type_Cake',
                    displayName: 'Cake'
                },
                {
                    name: 'food:Dish type:Cake decoration',
                    urlName: 'cake-decoration',
                    fullName: 'food_Dish_type_Cake_decoration',
                    displayName: 'Cake decoration'
                }
            ]
        },
        {
            id: 'AWWFOOD-31114',
            title: 'Cheesecake recipes',
            shortTitle: 'Cheesecake recipes',
            dateCreated: '2015-01-11T17:20:00.00Z',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2016/11/22/32866/New-York-Cheesecake01.jpg',
            nodeType: 'RecipeCollection',
            summary:
                "A timeless dessert loved by all, a cheesecake makes the perfect finish to any meal. Whether it's a classic New York baked or a summery mango swirl, it really is the ultimate way to indulge your sweet tooth. In our collection here. we've included baked and no-bake recipes to suit all tastes and occasions. Dig in.",
            source: "Australian Women's Weekly",
            url: '/cheesecake-recipes-31114',
            parentName: 'Home',
            parentUrl: '/',
            tagsDetails: [
                {
                    name: 'food:Dish type:Cake',
                    urlName: 'cake',
                    fullName: 'food_Dish_type_Cake',
                    displayName: 'Cake'
                },
                {
                    name: 'food:Cuisine:Other',
                    urlName: 'other',
                    fullName: 'food_Cuisine_Other',
                    displayName: 'Other'
                },
                {
                    name: 'food:Main ingredient:Other:Cheese',
                    urlName: 'cheese',
                    fullName: 'food_Main_ingredient_Other_Cheese',
                    displayName: 'Cheese'
                },
                {
                    name: 'food:Cooking time:No cooking required',
                    urlName: 'no-cooking-required',
                    fullName: 'food_Cooking_time_No_cooking_required',
                    displayName: 'No cooking required'
                },
                {
                    name: 'food:Difficulty:Moderate',
                    urlName: 'moderate',
                    fullName: 'food_Difficulty_Moderate',
                    displayName: 'Moderate'
                },
                {
                    name: 'food:Meal:Dessert',
                    urlName: 'dessert',
                    fullName: 'food_Meal_Dessert',
                    displayName: 'Dessert'
                }
            ]
        },
        {
            id: 'AWWFOOD-2418',
            title: 'Chicken and corn soup',
            shortTitle: 'Chicken and corn soup',
            dateCreated: '2016-03-08T01:13:30.00Z',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2016/03/09/31565/chicken-corn-sou.JPG',
            nodeType: 'Recipe',
            summary:
                "A light and clear traditional Chinese soup, your dinner guests will love this delicious chicken and corn soup, straight from The Australian Women's Weekly vintage cookbooks.",
            source: "Australian Women's Weekly",
            url: '/recipes/chicken-and-corn-soup-2418',
            parentName: 'Recipes',
            parentUrl: '/recipes',
            tagsDetails: [
                {
                    name: 'food:Difficulty:Moderate',
                    urlName: 'moderate',
                    fullName: 'food_Difficulty_Moderate',
                    displayName: 'Moderate'
                },
                {
                    name: 'food:Cooking time:More than 2 hours',
                    urlName: 'more-than-2-hours',
                    fullName: 'food_Cooking_time_More_than_2_hours',
                    displayName: 'More than 2 hours'
                },
                {
                    name: 'food:Cuisine:Chinese',
                    urlName: 'chinese',
                    fullName: 'food_Cuisine_Chinese',
                    displayName: 'Chinese'
                },
                {
                    name: 'food:Dish type:Soup',
                    urlName: 'soup',
                    fullName: 'food_Dish_type_Soup',
                    displayName: 'Soup'
                },
                {
                    name: 'food:Meal:Starter',
                    urlName: 'starter',
                    fullName: 'food_Meal_Starter',
                    displayName: 'Starter'
                },
                {
                    name: 'food:Main ingredient:Meat and poultry:Chicken',
                    urlName: 'chicken',
                    fullName: 'food_Main_ingredient_Meat_and_poultry_Chicken',
                    displayName: 'Chicken'
                },
                {
                    name: 'food:Cooking method:Boil',
                    urlName: 'boil',
                    fullName: 'food_Cooking_method_Boil',
                    displayName: 'Boil'
                },
                {
                    name: 'food:Cooking method:Simmer',
                    urlName: 'simmer',
                    fullName: 'food_Cooking_method_Simmer',
                    displayName: 'Simmer'
                }
            ]
        }
    ],
    heroTeaser: {
        id: 'AWWFOOD-2417',
        title: 'Spring rolls',
        shortTitle: 'Spring rolls',
        dateCreated: '2016-03-08T00:55:00.00Z',
        imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2016/03/09/31563/srols.JPG',
        nodeType: 'Recipe',
        summary: "A delicious Chinese spring roll recipe, straight from The Australian Women's Weekly cookbook archives.",
        source: 'Supplied',
        url: '/recipes/spring-rolls-2417',
        parentName: 'Recipes',
        parentUrl: '/recipes',
        tagsDetails: [
            {
                name: 'food:Difficulty:Moderate',
                urlName: 'moderate',
                fullName: 'food_Difficulty_Moderate',
                displayName: 'Moderate'
            },
            {
                name: 'food:Cuisine:Chinese',
                urlName: 'chinese',
                fullName: 'food_Cuisine_Chinese',
                displayName: 'Chinese'
            },
            {
                name: 'food:Meal:Starter',
                urlName: 'starter',
                fullName: 'food_Meal_Starter',
                displayName: 'Starter'
            },
            {
                name: 'food:Dish type:Share plate / tapas',
                urlName: 'share-plate-tapas',
                fullName: 'food_Dish_type_Share_plate_tapas',
                displayName: 'Share plate / tapas'
            },
            {
                name: 'food:Main ingredient:Meat and poultry:Pork',
                urlName: 'pork',
                fullName: 'food_Main_ingredient_Meat_and_poultry_Pork',
                displayName: 'Pork'
            },
            {
                name: 'food:Main ingredient:Fish and seafood:Prawn',
                urlName: 'prawn',
                fullName: 'food_Main_ingredient_Fish_and_seafood_Prawn',
                displayName: 'Prawn'
            },
            {
                name: 'food:Cooking method:Deep fry',
                urlName: 'deep-fry',
                fullName: 'food_Cooking_method_Deep_fry',
                displayName: 'Deep fry'
            },
            {
                name: 'food:Cooking time:Less than 60 minutes',
                urlName: 'less-than-60-minutes',
                fullName: 'food_Cooking_time_Less_than_60_minutes',
                displayName: 'Less than 60 minutes'
            }
        ]
    },
    latestTeasers: [
        {
            id: 'AWWFOOD-3904',
            title: 'Choc caramel self-saucing puddings',
            dateCreated: '2018-01-23T22:56:05.00Z',
            imageAltText: 'chocolate self saucing puddings',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/24/34749/Choc-caramel-self-saucing-puddings.jpg',
            nodeType: 'Recipe',
            summary:
                "Indulgent, gooey chocolate sauce is revealed when you break through the soft, fluffy topping of these delicious puddings. Those with a sweet tooth won't be able to resist.",
            source: "Woman's Day",
            url: '/recipes/choc-caramel-self-saucing-puddings-3904',
            parentName: 'Recipes',
            parentUrl: '/recipes',
            tagsDetails: [
                {
                    name: 'food:Occasion:Easter',
                    urlName: 'easter',
                    fullName: 'food_Occasion_Easter',
                    displayName: 'Easter'
                },
                {
                    name: 'food:Dish type:Pudding',
                    urlName: 'pudding',
                    fullName: 'food_Dish_type_Pudding',
                    displayName: 'Pudding'
                },
                {
                    name: 'food:Main ingredient:Other:Chocolate',
                    urlName: 'chocolate',
                    fullName: 'food_Main_ingredient_Other_Chocolate',
                    displayName: 'Chocolate'
                },
                {
                    name: 'food:Cuisine:Modern Australian',
                    urlName: 'modern-australian',
                    fullName: 'food_Cuisine_Modern_Australian',
                    displayName: 'Modern Australian'
                },
                {
                    name: 'food:Cooking time:Less than 60 minutes',
                    urlName: 'less-than-60-minutes',
                    fullName: 'food_Cooking_time_Less_than_60_minutes',
                    displayName: 'Less than 60 minutes'
                },
                {
                    name: 'food:Difficulty:Moderate',
                    urlName: 'moderate',
                    fullName: 'food_Difficulty_Moderate',
                    displayName: 'Moderate'
                },
                {
                    name: 'food:Meal:Dessert',
                    urlName: 'dessert',
                    fullName: 'food_Meal_Dessert',
                    displayName: 'Dessert'
                }
            ]
        },
        {
            id: 'AWWFOOD-3901',
            title: 'Choc, banana and caramel iceblocks',
            dateCreated: '2018-01-23T22:16:22.00Z',
            imageAltText: 'choc banana ice blocks',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/24/34746/Choc-banana-and-caramel-ice-blocks.jpg',
            nodeType: 'Recipe',
            summary:
                "Indulge your sweet tooth with these decadent chocolate, caramel and banana iceblocks. They're the perfect homemade frozen treat for summer - and they're budget-friendly too!",
            source: "Woman's Day",
            url: '/recipes/choc-banana-and-caramel-iceblocks-3901',
            parentName: 'Recipes',
            parentUrl: '/recipes',
            tagsDetails: [
                {
                    name: 'food:Dish type:Frozen',
                    urlName: 'frozen',
                    fullName: 'food_Dish_type_Frozen',
                    displayName: 'Frozen'
                },
                {
                    name: 'food:Main ingredient:Fruits and berries:Banana',
                    urlName: 'banana',
                    fullName: 'food_Main_ingredient_Fruits_and_berries_Banana',
                    displayName: 'Banana'
                },
                {
                    name: 'food:Main ingredient:Other:Caramel',
                    urlName: 'caramel',
                    fullName: 'food_Main_ingredient_Other_Caramel',
                    displayName: 'Caramel'
                },
                {
                    name: 'food:Main ingredient:Other:Chocolate',
                    urlName: 'chocolate',
                    fullName: 'food_Main_ingredient_Other_Chocolate',
                    displayName: 'Chocolate'
                },
                {
                    name: 'food:Cuisine:Modern Australian',
                    urlName: 'modern-australian',
                    fullName: 'food_Cuisine_Modern_Australian',
                    displayName: 'Modern Australian'
                },
                {
                    name: 'food:Cooking time:No cooking required',
                    urlName: 'no-cooking-required',
                    fullName: 'food_Cooking_time_No_cooking_required',
                    displayName: 'No cooking required'
                }
            ]
        },
        {
            id: 'AWWFOOD-3899',
            title: 'Choc mallow ice-cream sandwiches',
            dateCreated: '2018-01-23T22:00:38.00Z',
            imageAltText: 'homemade ice-cream sandwiches',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/24/34744/Choc-mallow-ice-cream-sandwiches.jpg',
            nodeType: 'Recipe',
            summary:
                'Vanilla ice-cream swirled through with raspberry syrup is sandwiched between two wagon wheels for an easy and delicious treat to cool down with this summer.',
            source: "Woman's Day",
            url: '/recipes/choc-mallow-ice-cream-sandwiches-3899',
            parentName: 'Recipes',
            parentUrl: '/recipes',
            tagsDetails: [
                {
                    name: 'food:Dish type:Ice-cream',
                    urlName: 'ice-cream',
                    fullName: 'food_Dish_type_Ice_cream',
                    displayName: 'Ice-cream'
                },
                {
                    name: 'food:Main ingredient:Other:Chocolate',
                    urlName: 'chocolate',
                    fullName: 'food_Main_ingredient_Other_Chocolate',
                    displayName: 'Chocolate'
                },
                {
                    name: 'food:Cuisine:Modern Australian',
                    urlName: 'modern-australian',
                    fullName: 'food_Cuisine_Modern_Australian',
                    displayName: 'Modern Australian'
                },
                {
                    name: 'food:Cooking time:No cooking required',
                    urlName: 'no-cooking-required',
                    fullName: 'food_Cooking_time_No_cooking_required',
                    displayName: 'No cooking required'
                },
                {
                    name: 'food:Meal:Dessert',
                    urlName: 'dessert',
                    fullName: 'food_Meal_Dessert',
                    displayName: 'Dessert'
                }
            ]
        },
        {
            id: 'AWWFOOD-3898',
            title: 'Ice-cream waffle sandwiches',
            dateCreated: '2018-01-23T04:49:33.00Z',
            imageAltText: 'easy ice-cream sandwiches',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/23/34741/Ice-cream-waffle-sandwiches.jpg',
            nodeType: 'Recipe',
            summary: "All you'll need for these tasty frozen treats are store-bought ice-cream and waffles. Easy!",
            source: "Woman's Day",
            url: '/recipes/ice-cream-waffle-sandwiches-3898',
            parentName: 'Recipes',
            parentUrl: '/recipes',
            tagsDetails: [
                {
                    name: 'food:Dish type:Ice-cream',
                    urlName: 'ice-cream',
                    fullName: 'food_Dish_type_Ice_cream',
                    displayName: 'Ice-cream'
                },
                {
                    name: 'food:Cuisine:Modern Australian',
                    urlName: 'modern-australian',
                    fullName: 'food_Cuisine_Modern_Australian',
                    displayName: 'Modern Australian'
                },
                {
                    name: 'food:Meal:Dessert',
                    urlName: 'dessert',
                    fullName: 'food_Meal_Dessert',
                    displayName: 'Dessert'
                },
                {
                    name: 'food:Cooking time:No cooking required',
                    urlName: 'no-cooking-required',
                    fullName: 'food_Cooking_time_No_cooking_required',
                    displayName: 'No cooking required'
                },
                {
                    name: 'food:Main ingredient:Other:Chocolate',
                    urlName: 'chocolate',
                    fullName: 'food_Main_ingredient_Other_Chocolate',
                    displayName: 'Chocolate'
                }
            ]
        },
        {
            id: 'AWWFOOD-3897',
            title: 'Choc berry ice-cream sandwiches',
            dateCreated: '2018-01-23T04:42:53.00Z',
            imageAltText: 'chocolate and berry ice-cream sandwiches',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/23/34740/Choc-berry-ice-cream-sandwiches.jpg',
            nodeType: 'Recipe',
            summary: "Easy to build and so delicious, these chocolate and raspberry ice-cream sandwiches won't last long!",
            source: "Woman's Day",
            url: '/recipes/choc-berry-ice-cream-sandwiches-3897',
            parentName: 'Recipes',
            parentUrl: '/recipes',
            tagsDetails: [
                {
                    name: 'food:Dish type:Ice-cream',
                    urlName: 'ice-cream',
                    fullName: 'food_Dish_type_Ice_cream',
                    displayName: 'Ice-cream'
                },
                {
                    name: 'food:Cooking time:No cooking required',
                    urlName: 'no-cooking-required',
                    fullName: 'food_Cooking_time_No_cooking_required',
                    displayName: 'No cooking required'
                },
                {
                    name: 'food:Cuisine:Modern Australian',
                    urlName: 'modern-australian',
                    fullName: 'food_Cuisine_Modern_Australian',
                    displayName: 'Modern Australian'
                },
                {
                    name: 'food:Difficulty:Moderate',
                    urlName: 'moderate',
                    fullName: 'food_Difficulty_Moderate',
                    displayName: 'Moderate'
                },
                {
                    name: 'food:Meal:Dessert',
                    urlName: 'dessert',
                    fullName: 'food_Meal_Dessert',
                    displayName: 'Dessert'
                },
                {
                    name: 'food:Main ingredient:Other:Chocolate',
                    urlName: 'chocolate',
                    fullName: 'food_Main_ingredient_Other_Chocolate',
                    displayName: 'Chocolate'
                }
            ]
        },
        {
            id: 'AWWFOOD-31852',
            title: 'Delicious and easy ice-cream sandwiches to cool down with this summer',
            dateCreated: '2018-01-22T04:00:00.00Z',
            imageAltText: 'ice-cream sandwiches',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/07/16/18584/HL0859D12_02.jpg',
            nodeType: 'RecipeCollection',
            summary:
                "Indulge your sweet tooth with these delicious summer snacks. We're talking creamy, cool ice-cream in all your favourite flavours sandwiched between soft, crumbly cookies. Add the finishing touches with sprinkles of nuts and drizzles of syrups and sauces for the ultimate treat.",
            url: '/ice-cream-sandwich-recipes-31852',
            parentName: 'Home',
            parentUrl: '/',
            tagsDetails: [
                {
                    name: 'food:Dish type:Ice-cream',
                    urlName: 'ice-cream',
                    fullName: 'food_Dish_type_Ice_cream',
                    displayName: 'Ice-cream'
                },
                {
                    name: 'food:Cooking time:Less than 15 minutes',
                    urlName: 'less-than-15-minutes',
                    fullName: 'food_Cooking_time_Less_than_15_minutes',
                    displayName: 'Less than 15 minutes'
                },
                {
                    name: 'food:Difficulty:Moderate',
                    urlName: 'moderate',
                    fullName: 'food_Difficulty_Moderate',
                    displayName: 'Moderate'
                },
                {
                    name: 'food:Cuisine:Modern Australian',
                    urlName: 'modern-australian',
                    fullName: 'food_Cuisine_Modern_Australian',
                    displayName: 'Modern Australian'
                },
                {
                    name: 'food:Meal:Dessert',
                    urlName: 'dessert',
                    fullName: 'food_Meal_Dessert',
                    displayName: 'Dessert'
                },
                {
                    name: 'food:Main ingredient:Other:Chocolate',
                    urlName: 'chocolate',
                    fullName: 'food_Main_ingredient_Other_Chocolate',
                    displayName: 'Chocolate'
                }
            ]
        },
        {
            id: 'AWWFOOD-3865',
            title: 'Soft pastrami tacos',
            dateCreated: '2018-01-16T00:26:03.00Z',
            imageAltText: 'soft shell taco fillings',
            imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/16/34704/Soft-pastrami-tacos.jpg',
            nodeType: 'Recipe',
            summary: 'Flavoursome, easy and ready in just 10 minutes, these tasty soft shell tacos are perfect for lunch.',
            source: 'Recipes Plus',
            url: '/recipes/soft-pastrami-tacos-3865',
            parentName: 'Recipes',
            parentUrl: '/recipes',
            tagsDetails: [
                {
                    name: 'food:Cuisine:Mexican',
                    urlName: 'mexican',
                    fullName: 'food_Cuisine_Mexican',
                    displayName: 'Mexican'
                },
                {
                    name: 'food:Main ingredient:Meat and poultry:Ham and bacon',
                    urlName: 'ham-and-bacon',
                    fullName: 'food_Main_ingredient_Meat_and_poultry_Ham_and_bacon',
                    displayName: 'Ham and bacon'
                },
                {
                    name: 'food:Main ingredient:Vegetables:Corn',
                    urlName: 'corn',
                    fullName: 'food_Main_ingredient_Vegetables_Corn',
                    displayName: 'Corn'
                },
                {
                    name: 'food:Cooking time:No cooking required',
                    urlName: 'no-cooking-required',
                    fullName: 'food_Cooking_time_No_cooking_required',
                    displayName: 'No cooking required'
                },
                {
                    name: 'food:Dish type:Share plate / tapas',
                    urlName: 'share-plate-tapas',
                    fullName: 'food_Dish_type_Share_plate_tapas',
                    displayName: 'Share plate / tapas'
                }
            ]
        }
    ],
    list: {
        listName: 'xmas',
        params: {
            pageNo: 1,
            section: '/xmas',
            sectionFormatted: 'xmas'
        },
        items: [
            [
                {
                    id: 'AWWFOOD-31847',
                    title: 'Food fusions: sweet and salty desserts',
                    dateCreated: '2018-01-15T22:34:27.00Z',
                    imageAltText: 'salted caramel hearts',
                    imageUrl:
                        'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/03/18/9ce01376018f42c991726ddbc7d3284a/caramel-peanut-hearts.jpg',
                    nodeType: 'RecipeCollection',
                    summary:
                        "The sweet 'n salty trend all started with salted caramel - indulgent sauces and creamy custard with a burst of salt teamed with tarts, truffles and trifles. It has since branched out to incorporate everything from salty peanut butter desserts, salted chocolate treats topped with pretzels and even bacon-based delights. Find all these delicious recipes and more below.",
                    url: '/food-fusions-sweet-and-salty-desserts-31847',
                    parentName: 'Home',
                    parentUrl: '/',
                    tagsDetails: [
                        {
                            name: 'food:Meal:Dessert',
                            urlName: 'dessert',
                            fullName: 'food_Meal_Dessert',
                            displayName: 'Dessert'
                        },
                        {
                            name: 'food:Cuisine:Modern Australian',
                            urlName: 'modern-australian',
                            fullName: 'food_Cuisine_Modern_Australian',
                            displayName: 'Modern Australian'
                        },
                        {
                            name: 'food:Difficulty:Moderate',
                            urlName: 'moderate',
                            fullName: 'food_Difficulty_Moderate',
                            displayName: 'Moderate'
                        },
                        {
                            name: 'food:Dish type:Sweet dish',
                            urlName: 'sweet-dish',
                            fullName: 'food_Dish_type_Sweet_dish',
                            displayName: 'Sweet dish'
                        },
                        {
                            name: 'food:Cooking time:Less than 60 minutes',
                            urlName: 'less-than-60-minutes',
                            fullName: 'food_Cooking_time_Less_than_60_minutes',
                            displayName: 'Less than 60 minutes'
                        },
                        {
                            name: 'food:Main ingredient:Other:Chocolate',
                            urlName: 'chocolate',
                            fullName: 'food_Main_ingredient_Other_Chocolate',
                            displayName: 'Chocolate'
                        },
                        {
                            name: 'food:Main ingredient:Other:Caramel',
                            urlName: 'caramel',
                            fullName: 'food_Main_ingredient_Other_Caramel',
                            displayName: 'Caramel'
                        }
                    ]
                },
                {
                    id: 'AWWFOOD-3857',
                    title: 'Pea and smoked ham buckwheat risotto',
                    dateCreated: '2018-01-15T01:05:07.00Z',
                    imageAltText: 'buckwheat risotto',
                    imageUrl:
                        'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/15/34695/Pea-and-smoked-ham-buckwheat-risotto.jpg',
                    nodeType: 'Recipe',
                    summary:
                        "High in fibre and gluten-free, buckwheat is a nutritious alternative to rice, and is just as easy to turn into risotto. Here, we've teamed it with a classic pea and ham hock combination - yum!",
                    source: "Woman's Day",
                    url: '/recipes/pea-and-smoked-ham-buckwheat-risotto-3857',
                    parentName: 'Recipes',
                    parentUrl: '/recipes',
                    tagsDetails: [
                        {
                            name: 'food:Dish type:Rice dish',
                            urlName: 'rice-dish',
                            fullName: 'food_Dish_type_Rice_dish',
                            displayName: 'Rice dish'
                        },
                        {
                            name: 'food:Main ingredient:Vegetables:Pea',
                            urlName: 'pea',
                            fullName: 'food_Main_ingredient_Vegetables_Pea',
                            displayName: 'Pea'
                        },
                        {
                            name: 'food:Main ingredient:Meat and poultry:Ham and bacon',
                            urlName: 'ham-and-bacon',
                            fullName: 'food_Main_ingredient_Meat_and_poultry_Ham_and_bacon',
                            displayName: 'Ham and bacon'
                        },
                        {
                            name: 'food:Cuisine:Other',
                            urlName: 'other',
                            fullName: 'food_Cuisine_Other',
                            displayName: 'Other'
                        },
                        {
                            name: 'food:Difficulty:Moderate',
                            urlName: 'moderate',
                            fullName: 'food_Difficulty_Moderate',
                            displayName: 'Moderate'
                        },
                        {
                            name: 'food:Cooking time:More than 1 hour',
                            urlName: 'more-than-1-hour',
                            fullName: 'food_Cooking_time_More_than_1_hour',
                            displayName: 'More than 1 hour'
                        }
                    ]
                },
                {
                    id: 'AWWFOOD-3847',
                    title: 'Gluten-free blondies',
                    dateCreated: '2018-01-08T22:51:41.00Z',
                    imageAltText: 'gluten free blondies',
                    imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/09/34680/Gluten-free-blondies.jpg',
                    nodeType: 'Recipe',
                    summary: 'Fun and delicious, these decadent white chocolate brownies can be enjoyed by everyone.',
                    source: "Woman's Day",
                    url: '/recipes/gluten-free-blondies-3847',
                    parentName: 'Recipes',
                    parentUrl: '/recipes',
                    tagsDetails: [
                        {
                            name: 'food:Main ingredient:Other:Chocolate',
                            urlName: 'chocolate',
                            fullName: 'food_Main_ingredient_Other_Chocolate',
                            displayName: 'Chocolate'
                        },
                        {
                            name: 'food:Dish type:Sweet dish',
                            urlName: 'sweet-dish',
                            fullName: 'food_Dish_type_Sweet_dish',
                            displayName: 'Sweet dish'
                        },
                        {
                            name: 'food:Difficulty:Moderate',
                            urlName: 'moderate',
                            fullName: 'food_Difficulty_Moderate',
                            displayName: 'Moderate'
                        },
                        {
                            name: 'food:Cooking time:More than 1 hour',
                            urlName: 'more-than-1-hour',
                            fullName: 'food_Cooking_time_More_than_1_hour',
                            displayName: 'More than 1 hour'
                        },
                        {
                            name: 'food:Meal:Dessert',
                            urlName: 'dessert',
                            fullName: 'food_Meal_Dessert',
                            displayName: 'Dessert'
                        },
                        {
                            name: 'food:Cuisine:Modern Australian',
                            urlName: 'modern-australian',
                            fullName: 'food_Cuisine_Modern_Australian',
                            displayName: 'Modern Australian'
                        }
                    ]
                },
                {
                    id: 'AWWFOOD-3846',
                    title: 'Raspberry and white chocolate muffin tin brownies',
                    dateCreated: '2018-01-08T22:44:58.00Z',
                    imageAltText: 'raspberry and white chocolate brownies',
                    imageUrl:
                        'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/09/34679/Raspberry-and-white-chocolate-muffin-tin-brownies.jpg',
                    nodeType: 'Recipe',
                    summary:
                        'Gooey chocolate brownies are made even more decadent with chunks of white chocolate, tart raspberries and a dusting of cocoa. Serve alongside a cuppa for afternoon tea.',
                    source: "Woman's Day",
                    url: '/recipes/raspberry-and-white-chocolate-muffin-tin-brownies-3846',
                    parentName: 'Recipes',
                    parentUrl: '/recipes',
                    tagsDetails: [
                        {
                            name: 'food:Main ingredient:Other:Chocolate',
                            urlName: 'chocolate',
                            fullName: 'food_Main_ingredient_Other_Chocolate',
                            displayName: 'Chocolate'
                        },
                        {
                            name: 'food:Main ingredient:Fruits and berries:Raspberry',
                            urlName: 'raspberry',
                            fullName: 'food_Main_ingredient_Fruits_and_berries_Raspberry',
                            displayName: 'Raspberry'
                        },
                        {
                            name: 'food:Difficulty:Moderate',
                            urlName: 'moderate',
                            fullName: 'food_Difficulty_Moderate',
                            displayName: 'Moderate'
                        },
                        {
                            name: 'food:Cooking time:Less than 30 minutes',
                            urlName: 'less-than-30-minutes',
                            fullName: 'food_Cooking_time_Less_than_30_minutes',
                            displayName: 'Less than 30 minutes'
                        },
                        {
                            name: 'food:Cuisine:Modern Australian',
                            urlName: 'modern-australian',
                            fullName: 'food_Cuisine_Modern_Australian',
                            displayName: 'Modern Australian'
                        },
                        {
                            name: 'food:Meal:Dessert',
                            urlName: 'dessert',
                            fullName: 'food_Meal_Dessert',
                            displayName: 'Dessert'
                        },
                        {
                            name: 'food:Dish type:Sweet dish',
                            urlName: 'sweet-dish',
                            fullName: 'food_Dish_type_Sweet_dish',
                            displayName: 'Sweet dish'
                        }
                    ]
                },
                {
                    id: 'AWWFOOD-3845',
                    title: 'S’mores brownies',
                    dateCreated: '2018-01-08T22:37:02.00Z',
                    imageAltText: 'marshmallow brownies',
                    imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/09/34678/Smores-brownies.jpg',
                    nodeType: 'Recipe',
                    summary: "Gooey, decadent and completely addictive, you just can't go past these easy s'mores brownies.",
                    source: "Woman's Day",
                    url: '/recipes/smores-brownies-3845',
                    parentName: 'Recipes',
                    parentUrl: '/recipes',
                    tagsDetails: [
                        {
                            name: 'food:Dish type:Slice',
                            urlName: 'slice',
                            fullName: 'food_Dish_type_Slice',
                            displayName: 'Slice'
                        },
                        {
                            name: 'food:Meal:Dessert',
                            urlName: 'dessert',
                            fullName: 'food_Meal_Dessert',
                            displayName: 'Dessert'
                        },
                        {
                            name: 'food:Difficulty:Moderate',
                            urlName: 'moderate',
                            fullName: 'food_Difficulty_Moderate',
                            displayName: 'Moderate'
                        },
                        {
                            name: 'food:Cooking time:Less than 60 minutes',
                            urlName: 'less-than-60-minutes',
                            fullName: 'food_Cooking_time_Less_than_60_minutes',
                            displayName: 'Less than 60 minutes'
                        },
                        {
                            name: 'food:Cuisine:American',
                            urlName: 'american',
                            fullName: 'food_Cuisine_American',
                            displayName: 'American'
                        },
                        {
                            name: 'food:Main ingredient:Other:Chocolate',
                            urlName: 'chocolate',
                            fullName: 'food_Main_ingredient_Other_Chocolate',
                            displayName: 'Chocolate'
                        }
                    ]
                },
                {
                    id: 'AWWFOOD-31844',
                    title: '12 essential blondie recipes',
                    dateCreated: '2018-01-08T05:00:00.00Z',
                    imageAltText: 'raspberry blondies',
                    imageUrl:
                        'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2014/11/28/WomansDayBR107455/raspberry-and-macadamia-blondies.jpg',
                    nodeType: 'RecipeCollection',
                    summary:
                        "They're the white chocolate counterpart of the classic brownie, and these blondies are just as versatile. Swirl through caramel for a decadent treat or combine macadamias and raspberries for the ultimate afternoon tea snack. Easy and delicious, you're sure to find a recipe to love here.",
                    url: '/blondies-recipes-31844',
                    parentName: 'Home',
                    parentUrl: '/',
                    tagsDetails: [
                        {
                            name: 'food:Dish type:Sweet dish',
                            urlName: 'sweet-dish',
                            fullName: 'food_Dish_type_Sweet_dish',
                            displayName: 'Sweet dish'
                        },
                        {
                            name: 'food:Meal:Dessert',
                            urlName: 'dessert',
                            fullName: 'food_Meal_Dessert',
                            displayName: 'Dessert'
                        },
                        {
                            name: 'food:Main ingredient:Other:Chocolate',
                            urlName: 'chocolate',
                            fullName: 'food_Main_ingredient_Other_Chocolate',
                            displayName: 'Chocolate'
                        },
                        {
                            name: 'food:Cooking time:Less than 60 minutes',
                            urlName: 'less-than-60-minutes',
                            fullName: 'food_Cooking_time_Less_than_60_minutes',
                            displayName: 'Less than 60 minutes'
                        },
                        {
                            name: 'food:Difficulty:Moderate',
                            urlName: 'moderate',
                            fullName: 'food_Difficulty_Moderate',
                            displayName: 'Moderate'
                        },
                        {
                            name: 'food:Cuisine:Modern Australian',
                            urlName: 'modern-australian',
                            fullName: 'food_Cuisine_Modern_Australian',
                            displayName: 'Modern Australian'
                        }
                    ]
                },
                {
                    id: 'AWWFOOD-3831',
                    title: 'White Christmas ice-cream tree',
                    dateCreated: '2018-01-03T03:16:29.00Z',
                    imageAltText: 'ice cream christmas tree recipe',
                    imageUrl:
                        'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/03/34656/white-christmas-ice-cream-tree.jpg',
                    nodeType: 'Recipe',
                    summary:
                        'Sculpt this gorgeous White Christmas tree out of vanilla ice-cream and decorate with mini meringues, frozen raspberries and little chocolates for a stunning centrepiece for your festive feast.',
                    source: "Woman's Day",
                    url: '/recipes/white-christmas-ice-cream-tree-3831',
                    parentName: 'Recipes',
                    parentUrl: '/recipes',
                    tagsDetails: [
                        {
                            name: 'food:Occasion:Christmas',
                            urlName: 'christmas',
                            fullName: 'food_Occasion_Christmas',
                            displayName: 'Christmas'
                        },
                        {
                            name: 'food:Dish type:Ice-cream',
                            urlName: 'ice-cream',
                            fullName: 'food_Dish_type_Ice_cream',
                            displayName: 'Ice-cream'
                        },
                        {
                            name: 'food:Main ingredient:Other:Chocolate',
                            urlName: 'chocolate',
                            fullName: 'food_Main_ingredient_Other_Chocolate',
                            displayName: 'Chocolate'
                        },
                        {
                            name: 'food:Difficulty:Moderate',
                            urlName: 'moderate',
                            fullName: 'food_Difficulty_Moderate',
                            displayName: 'Moderate'
                        },
                        {
                            name: 'food:Cuisine:Modern Australian',
                            urlName: 'modern-australian',
                            fullName: 'food_Cuisine_Modern_Australian',
                            displayName: 'Modern Australian'
                        },
                        {
                            name: 'food:Cooking time:No cooking required',
                            urlName: 'no-cooking-required',
                            fullName: 'food_Cooking_time_No_cooking_required',
                            displayName: 'No cooking required'
                        },
                        {
                            name: 'food:Meal:Dessert',
                            urlName: 'dessert',
                            fullName: 'food_Meal_Dessert',
                            displayName: 'Dessert'
                        }
                    ]
                }
            ]
        ],
        previous: null,
        current: {
            path: '/xmas',
            url: 'http://awwfood-site-au.sit.bxm.net.au/xmas'
        },
        next: {
            path: '/xmas?pageNo=2',
            url: 'http://awwfood-site-au.sit.bxm.net.au/xmas?pageNo=2'
        }
    },
    section: {
        id: 'AWWFOOD-31872',
        name: 'xmas',
        urlName: 'xmas'
    },
    promoted: {
        title: 'Customised Title',
        items: [
            {
                id: 'AWWFOOD-2420',
                title: 'Lemon chicken',
                shortTitle: 'Lemon chicken',
                dateCreated: '2016-03-08T03:57:52.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2016/03/09/31568/lemon-chicken.JPG',
                nodeType: 'Recipe',
                summary: 'With subtle Oriental flavouring, try this delicious lemon chicken recipe for a light and flavourful family dinner.',
                source: "Australian Women's Weekly",
                url: '/recipes/lemon-chicken-2420',
                parentName: 'Recipes',
                parentUrl: '/recipes',
                tagsDetails: [
                    {
                        name: 'food:Cooking time:Less than 60 minutes',
                        urlName: 'less-than-60-minutes',
                        fullName: 'food_Cooking_time_Less_than_60_minutes',
                        displayName: 'Less than 60 minutes'
                    },
                    {
                        name: 'food:Cuisine:Chinese',
                        urlName: 'chinese',
                        fullName: 'food_Cuisine_Chinese',
                        displayName: 'Chinese'
                    },
                    {
                        name: 'food:Dish type:Meat dish',
                        urlName: 'meat-dish',
                        fullName: 'food_Dish_type_Meat_dish',
                        displayName: 'Meat dish'
                    },
                    {
                        name: 'food:Main ingredient:Meat and poultry:Chicken',
                        urlName: 'chicken',
                        fullName: 'food_Main_ingredient_Meat_and_poultry_Chicken',
                        displayName: 'Chicken'
                    },
                    {
                        name: 'food:Cooking method:Deep fry',
                        urlName: 'deep-fry',
                        fullName: 'food_Cooking_method_Deep_fry',
                        displayName: 'Deep fry'
                    }
                ]
            },
            {
                id: 'AWWFOOD-3823',
                title: 'Zesty potato salad',
                shortTitle: 'Zesty potato salad',
                dateCreated: '2018-01-02T00:20:01.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/02/34646/Zesty-potato-salad.jpg',
                nodeType: 'Recipe',
                summary: 'You can throw together this last-minute potato, pancetta and celery salad in just 20 minutes - too easy!',
                source: "Woman's Day",
                url: '/recipes/zesty-potato-salad-3823',
                parentName: 'Recipes',
                parentUrl: '/recipes',
                tagsDetails: [
                    {
                        name: 'food:Dish type:Salad',
                        urlName: 'salad',
                        fullName: 'food_Dish_type_Salad',
                        displayName: 'Salad'
                    },
                    {
                        name: 'food:Main ingredient:Vegetables:Potato',
                        urlName: 'potato',
                        fullName: 'food_Main_ingredient_Vegetables_Potato',
                        displayName: 'Potato'
                    },
                    {
                        name: 'food:Cooking time:Less than 15 minutes',
                        urlName: 'less-than-15-minutes',
                        fullName: 'food_Cooking_time_Less_than_15_minutes',
                        displayName: 'Less than 15 minutes'
                    },
                    {
                        name: 'food:Cuisine:Modern Australian',
                        urlName: 'modern-australian',
                        fullName: 'food_Cuisine_Modern_Australian',
                        displayName: 'Modern Australian'
                    },
                    {
                        name: 'food:Meal:Side',
                        urlName: 'side',
                        fullName: 'food_Meal_Side',
                        displayName: 'Side'
                    }
                ]
            },
            {
                id: 'AWWFOOD-3825',
                title: 'Easy tomato panzanella',
                shortTitle: 'Easy tomato panzanella',
                dateCreated: '2018-01-02T00:53:45.00Z',
                imageUrl: 'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/02/34648/easy-tomato-panzanella.jpg',
                nodeType: 'Recipe',
                summary: 'This classic Italian tomato and bread salad is the perfect accompaniment to any main protein.',
                source: "Woman's Day",
                url: '/recipes/easy-tomato-panzanella-3825',
                parentName: 'Recipes',
                parentUrl: '/recipes',
                tagsDetails: [
                    {
                        name: 'food:Main ingredient:Vegetables:Tomato',
                        urlName: 'tomato',
                        fullName: 'food_Main_ingredient_Vegetables_Tomato',
                        displayName: 'Tomato'
                    },
                    {
                        name: 'food:Dish type:Salad',
                        urlName: 'salad',
                        fullName: 'food_Dish_type_Salad',
                        displayName: 'Salad'
                    },
                    {
                        name: 'food:Cooking time:Less than 15 minutes',
                        urlName: 'less-than-15-minutes',
                        fullName: 'food_Cooking_time_Less_than_15_minutes',
                        displayName: 'Less than 15 minutes'
                    },
                    {
                        name: 'food:Meal:Side',
                        urlName: 'side',
                        fullName: 'food_Meal_Side',
                        displayName: 'Side'
                    },
                    {
                        name: 'food:Cuisine:Italian',
                        urlName: 'italian',
                        fullName: 'food_Cuisine_Italian',
                        displayName: 'Italian'
                    }
                ]
            },
            {
                id: 'AWWFOOD-3827',
                title: "Cheat's black forest cake",
                shortTitle: "Cheat's black forest cake",
                dateCreated: '2018-01-02T01:26:30.00Z',
                imageUrl:
                    'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2018/01/02/34650/Super-fast-festive-black-forest-cake.jpg',
                nodeType: 'Recipe',
                summary:
                    'With decadent chocolate, fresh cherries and a rich vanilla cream, this recipe has everything you love in a black forest cake but takes less than a quarter of the time to prepare!',
                source: "Woman's Day",
                url: '/recipes/cheats-black-forest-cake-3827',
                parentName: 'Recipes',
                parentUrl: '/recipes',
                tagsDetails: [
                    {
                        name: 'food:Dish type:Cake',
                        urlName: 'cake',
                        fullName: 'food_Dish_type_Cake',
                        displayName: 'Cake'
                    },
                    {
                        name: 'food:Meal:Dessert',
                        urlName: 'dessert',
                        fullName: 'food_Meal_Dessert',
                        displayName: 'Dessert'
                    },
                    {
                        name: 'food:Main ingredient:Other:Chocolate',
                        urlName: 'chocolate',
                        fullName: 'food_Main_ingredient_Other_Chocolate',
                        displayName: 'Chocolate'
                    },
                    {
                        name: 'food:Main ingredient:Other:Cream',
                        urlName: 'cream',
                        fullName: 'food_Main_ingredient_Other_Cream',
                        displayName: 'Cream'
                    },
                    {
                        name: 'food:Main ingredient:Fruits and berries:Cherry',
                        urlName: 'cherry',
                        fullName: 'food_Main_ingredient_Fruits_and_berries_Cherry',
                        displayName: 'Cherry'
                    },
                    {
                        name: 'food:Cooking time:No cooking required',
                        urlName: 'no-cooking-required',
                        fullName: 'food_Cooking_time_No_cooking_required',
                        displayName: 'No cooking required'
                    },
                    {
                        name: 'food:Cuisine:Modern Australian',
                        urlName: 'modern-australian',
                        fullName: 'food_Cuisine_Modern_Australian',
                        displayName: 'Modern Australian'
                    }
                ]
            }
        ]
    },
    magCover: [
        {
            id: 'AWWFOOD-31873',
            url: '/wwf',
            moduleName: 'magcover',
            moduleTitle:
                'Subscribe to receive triple-tested recipes, expert cooking tips, food inspiration, and exclusive offers right to your inbox.',
            moduleImageUrl:
                '/api/asset?url=http%3A%2F%2Fdev.assets.cougar.bauer-media.net.au%2Fs3%2Fdigital-cougar-assets-dev%2FAwwFood%2F2018%2F08%2F28%2F31873%2F0006015_australian-womens-weekly-food-single-issues_220.jpg',
            pageDateCreated: '2018-08-28T06:18:46.00Z',
            moduleManualContent: {
                totalCount: 0,
                data: []
            },
            isSiteMagCover: true
        },
        {
            id: 'AWWFOOD-31874',
            url: '/aww-cookbooks',
            moduleName: 'magcover',
            moduleImageUrl:
                '/api/asset?url=http%3A%2F%2Fdev.assets.cougar.bauer-media.net.au%2Fs3%2Fdigital-cougar-assets-dev%2FAwwFood%2F2018%2F08%2F28%2F31874%2F0028558_australian-womens-weekly-food-magazine-subscription_220.jpg',
            pageDateCreated: '2018-08-28T06:18:54.00Z',
            moduleManualContent: {
                totalCount: 0,
                data: []
            },
            isSiteMagCover: false
        },
        {
            id: 'AWWFOOD-31866',
            url: '/australian-womens-weekly',
            moduleName: 'magcover',
            moduleImageUrl:
                '/api/asset?url=http%3A%2F%2Fdev.assets.cougar.bauer-media.net.au%2Fs3%2Fdigital-cougar-assets-dev%2FAwwFood%2F2018%2F08%2F28%2F31866%2F0014230_australian-womens-weekly-food-for-the-soul_220.png',
            pageDateCreated: '2018-08-28T06:10:58.00Z',
            moduleManualContent: {
                totalCount: 0,
                data: []
            },
            isSiteMagCover: false
        }
    ],
    comScoreSegmentIds:
        '300003,210000,240000,240002,240003,240004,240001,240005,240006,240007,240008,240009,240011,240012,240013,240014,240017,240015,240016,116600,116607,116608'
};
