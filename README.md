# Github Resumé

A single page application displaying github user information (based on react-redux).

### [Demo](https://frontant.github.io/github-resume-demo/)

### How to build the project

```shell
 # install dependencies
 npm install gulp-cli -g
 npm install

 # build the project in the "development" mode
 gulp

 # build the project in the "production" mode
 gulp build.production

 # run the built-in server to preview the website
 # or open the "./build/index.html" in your browser 
 gulp watch
```

### Important folders

- source folder: **./app**
- build folder: **./build**


### Model

```javascript
{
    userData: {
        isFetching: false,
        errorMessage: null,
        data: {
            username: "friend",
            name: "Michael Popesko",
            description: "Developer"
        }
    },
    repositories: {
        isFetching: false,
        errorMessage: null,
        data: [
            {
                id: "kh123k",
                name: "html5-template",
                description: "html5 template",
                website: "https://friend.github.com/html5-template"
            },
            {
                id: "sdfr3sy",
                name: "wordpress-template",
                description: "wordpress template",
                website: "https://friend.github.com/wordpress-template"
            }
        ]
    },
    languages:[
        {
            repositoryId: "kh123k",
            isFetching: false,
            errorMessage: null,
            data: [ "CSS", "Html", "Javascript" ]
        },
        {
            repositoryId: "sdfr3sy",
            isFetching: false,
            errorMessage: null,
            data: [ "CSS", "Javascript", "PHP" ]
        }
    ],
    cache: []
}
```

### Form

```html
<section>
    <header>
        <h1>
            Github Resumé
        </h1>
    </header>

    <section>
        <form>
            <fieldset>

                <label>
                    Enter your GitHub username and click "generate".
                </label>

                <label class="error-message"></label>

                <p>
                    <input type="text" placeholder="Enter your GitHub username" />

                    <input type="submit" value="generate"/>
                </p>

            </fieldset>
        </form>
    </section>

    <footer>
        <p>
            This app shows <b>maximum 5 repositories</b> in order to reduce
            number of requests to the GitHub API. <a href="https://developer.github.com/v3/#rate-limiting" target="_blank">Here</a> you can read
            more about limitations of the API.
        </p>
    </footer>
</section>
```

### Resume

```html
<section>
    <header class="user">
        <h1 class="user__name">
            Michael Popesko
        </h1>

        <h2 class="user__description">
            Developer
        </h2>
    </header>

    <section>
        <div>
            <h3>Repositories</h3>
            <ul>
                <li class="repository">
                    <span class="error-message"></span>
                    <h4 class="repository__name">
                        <a href="https://friend.github.com/html5-template" target="_blank">html5-template</a>
                    </h4>
                    <h5 class="repository__description">html5 template</h5>
                    <div class="repository__languages">
                        CSS, Html, Javascript
                    </div>
                </li>
                <li class="repository">
                    <span class="error-message"></span>
                    <h4 class="repository__name">
                        <a href="https://friend.github.com/wordpress-template" target="_blank">wordpress-template</a>
                    </h4>
                    <h5 class="repository__description">wordpress template</h5>
                    <div class="repository__languages">
                        CSS, Javascript, PHP
                    </div>
                </li>
            </ul>
            <a  href="#">back</a>
        </div>
    </section>

    <footer>
        <p>
            This app shows <b>maximum 5 repositories</b> in order to reduce
            number of requests to the GitHub API. <a href="https://developer.github.com/v3/#rate-limiting" target="_blank">Here</a> you can read
            more about limitations of the API.
        </p>
    </footer>
</section>
```
