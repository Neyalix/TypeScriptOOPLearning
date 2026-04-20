class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  createPost() {

  }

  updatePost(){

  }

  deletePodt(){

  }

}

class BLogPostDisplay{
    constructor(public blogPost: BlogPost){}

    displayHTML(){
      return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
    }
}

class BlogPostJson{
    constructor(public blogPost: BlogPost){}

    returnJSON(){
        return {
            title: this.blogPost.title,
            content: this.blogPost.content
        }
    }
}