import SearchBar from "../components/SearchBar/SearchBar";

/* create Yelp API v3 credentials and add credentials to Yelp.js */
const apiKey = 'ff3CaiKPth6YCpr7eW4GhNuK0_QKoTIpETPswX4RVBAOj0I28rhbaLTFi60TBDK0txzaP1kvwVdSe2PaE-iCxqS6oM-1FVL6j0JbW63NrrqN-h7CHteYntL3AerEXXYx';

/* create YELP module */
const Yelp = {
    /* create search() */
    searchYelp(term, location, sortBy) {
        /* fetch() will not function due to CROS restrictions */
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}` 
            },
        }).then(response => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                console.log(jsonResponse.businesses);
                return jsonResponse.businesses.map(((business) => {
                    console.log(business);
                    /* Accessing the JSON Response */
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                }));
            }
        });
    }
}
 
export default Yelp;
