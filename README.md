<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://fireship-clone.herokuapp.com/">
    <img src="https://avatars.githubusercontent.com/u/46283609" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">A full-stack web app (clone) inspired by Fireship.io</h3>

  <p align="center">
    <br />
    <a href="https://fireship-clone.herokuapp.com/"><strong>View Demo</strong></a>
    <br />
    <br />
    <a href="https://fireship.io/">View Source Website</a>
    ·
    <a href="https://github.com/ledinhanhtan-dev/fireship-clone/issues">Report Bug</a>
    ·
    <a href="https://github.com/ledinhanhtan-dev/fireship-clone/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://tnc-clone.web.app/)

🚀🚀🚀 Practice makes perfect!

[Fireship.io](https://fireship.io/) is a great place for web developers. I find the site very interesting

Here is my first app using Angular as front-end to build. It's a simple clone version of the [TNC Store](https://www.tncstore.vn/) e-commerce site.

This is a challenging project, especially the functionality of an e-commerce website such as sorting categories, add/remove item from cart and connect to the database using REST API.

Disclaimer: this is just a project for practicing, without any other purposes.

<p align="right">(<a href="#top">back to top</a>)</p>

### Frameworks/libraries used

Front-end:

- [Angular](https://angular.io)
- [@angular/elements](https://angular.io/api/elements)
- [HighlightJS](https://highlightjs.org)
- [Ngx-Markdown](https://www.npmjs.com/package/ngx-markdown)

Back-end:

- [NestJS](https://nestjs.com)
- [@nestjs/typeorm](https://www.npmjs.com/package/@nestjs/typeorm)
- [@nestjs/ng-universal](https://www.npmjs.com/package/@nestjs/ng-universal)

Database:

- [PostgreSQL](https://www.postgresql.org)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

🚀 The app is live at [https://fireship-clone.herokuapp.com](https://fireship-clone.herokuapp.com)

(Note: open up the app for the first time could take some time due to free hosting plan on Heroku)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Features

- Fully response for all devices
- User can switch theme by toggling "Theme" button
- Content in each lesson is parsed from markdown file (.md) by using [MarkedJS](https://marked.js.org/)
- Code blocks are displayed by using [HighlightJS](https://github.com/highlightjs/highlight.js/)
- Available api endpoints: [/api/lessons](https://fireship-clone.herokuapp.com/api/lessons), [/api/tags](https://fireship-clone.herokuapp.com/api/tags), [/api/contributors](https://fireship-clone.herokuapp.com/api/contributors) ...
- In the original Fireship, content is served by using [Hugo Framework](https://gohugo.io/), which made the site incredibly fast. But implementing Hugo is out of scope of this clone project (using [Angular](https://angular.io) as the main framework). Therefore the Angular code each Lesson is just an temporary solution.
- And finally, there is many missing features such as: single-course, login, search,... (but I decided not to implement those because of the conflict described above)

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

The purpose of this project is to practice and master Angular 👏

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

📧 Le Dinh Anh Tan - ledinhanhtan.dev@gmail.com

📌 Project Link: [https://github.com/ledinhanhtan-dev/fireship-clone](https://github.com/ledinhanhtan-dev/fireship-clone)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Languages and frameworks/libraries used in this project

- [TypeScript](https://www.typescriptlang.org)
- [Sass](https://sass-lang.com)
- [Angular](https://angular.io)
- [HighlightJS](https://highlightjs.org)
- [Ngx-Markdown](https://www.npmjs.com/package/ngx-markdown)
- [NestJS](https://nestjs.com)
- [TypeOrm](https://typeorm.io)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: https://user-images.githubusercontent.com/88238288/136992447-59b2f92e-378f-4724-a314-9d1e77855493.png
