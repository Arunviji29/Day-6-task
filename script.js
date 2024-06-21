class movie {
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const obj = new movie("Leo","7-screen studio","7.5");
console.log(obj.title,obj.studio,obj.rating);