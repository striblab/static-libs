# Static Libs

Repo of libraries hosted on our CDN. The main reason this exists, as opposed to using another CDN, is that we have a bit more control over it in case something goes wrong. Also, we are able to put our own or unpopular libs into this CDN that might not be on something like [CDNJS](https://cdnjs.com/).

It is important to make sure to use specific versions in front-end applications, as opposed to something like _latest_ or _3.x_, because it is more likely that a new version will break something instead of fix something.

## Adding libraries

1. (optional) If this is the first time including this library and not just another version, add an entry to the **Libraries** section below. This helps to know what is included and help distinguish libraries that might have similar names.
1. Get the production-ready files, such as minified JS or CSS files. There is no need to include files like the README.md. The `LICENSE` file is suggested, but not necessary.
   - Using files from [CDNJS](https://cdnjs.com/) is an easy method.
1. Add to the `libs` folder in the format `libs/<LIBRARY-NAME>/<VERSION>/<BUILT-FILE>.xx`.
   - `<LIBRARY-NAME>`: The URL-friendly, preferably lowercase, name of the library.
   - `<VERSION>`: The exact version of the library being included. Hopefully this follows [semver](http://semver.org/), but should follow the version used by the project. This could be something like the following:
     - `3.1.0`
     - `v2.3`
     - `master-20170633`
     - `dev-branch-8938abbd0923bd`
     - `commit-209ba98b375fcd`
     - `fork-zzolo-45834bb3cc90dd`
   - `<BUILT-FILE>.xx`: The production-ready file, such as `library-min.js`. Most libraries should only have a handful of files and no sub-directories.

## Publishing

Make sure the following is done, but note that it should only be done once:

1. Ensure you have access to the `static.startribune.com` S3 bucket.
1. [Install the AWS Command Line tool (awscli)](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
1. [Configure awscli](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

To publish to AWS:

- Do all: `aws s3 sync ./libs/ s3://static.startribune.com/assets/libs/ --acl "public-read" --cache-control="public, max-age=31536000" --exclude=".*"`
- A specific library version: `aws s3 sync ./libs/<LIBRARY-NAME>/<VERSION>/ s3://static.startribune.com/assets/libs/<LIBRARY-NAME>/<VERSION>/ --acl "public-read" --cache-control="public, max-age=31536000" --exclude=".*"`

## Accessing

The libraries will be available at the following URL:

    http://static.startribune.com/assets/libs/<LIBRARY-NAME>/<VERSION>/<BUILT-FILE>.xx

## Example

The following is a quick example using [Underscore.JS](http://underscorejs.org/).

1. Find the Underscore page on [CDNJS](https://cdnjs.com/libraries/underscore.js).
1. Download locally:
   1. `mkdir -p libs/underscore.js/1.8.3/`
   1. `wget https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js -O ./libs/underscore.js/1.8.3/underscore-min.js`
   1. `wget https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.map -O ./libs/underscore.js/1.8.3/underscore-min.map`
   1. `wget https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js -O ./libs/underscore.js/1.8.3/underscore.js`
1. Check the files locally.
1. Publish: `aws s3 sync ./libs/underscore.js/1.8.3/ s3://static.startribune.com/assets/libs/underscore.js/1.8.3/ --acl "public-read" --cache-control="public, max-age=31536000" --exclude=".*"`
   - If you are managing multiple AWS profiles, you can add the `--profile strib` flag to the command.
1. The main file will be accessible at: `http://static.startribune.com/assets/libs/underscore.js/1.8.3/underscore-min.js`

## Libraries

This is (hopefully) an up to date list of libraries included in this project, as well as their main files for recent version:

- [Underscore.js](http://underscorejs.org/) - `./libs/underscore.js/`
  - `http://static.startribune.com/assets/libs/underscore.js/1.8.3/underscore-min.js`
- [Pym.js](http://blog.apps.npr.org/pym.js/) - `./libs/pym.js/`
  - `http://static.startribune.com/assets/libs/pym.js/1.3.2/pym.v1.min.js`
- [Lodash](https://lodash.com/) - `./libs/lodash/`
  - `http://static.startribune.com/assets/libs/lodash/4.17.4/lodash.min.js`
- [Moment.js](https://momentjs.com/) - `./libs/moment.js/`
  - `http://static.startribune.com/assets/libs/moment/2.22.2/moment.min.js`
  - `http://static.startribune.com/assets/libs/moment/2.22.2/moment-with-locales.min.js`
- [Topojson](https://github.com/topojson/topojson) - `./libs/topojson/`
  - `http://static.startribune.com/assets/libs/topojson/3.0.2/topojson.min.js`
- [D3](https://d3js.org/) - `./libs/d3/`
  - `http://static.startribune.com/assets/libs/d3/5.7.0/d3.min.js`
- [D3 Legend](http://d3-legend.susielu.com/) - `./libs/d3-legend/`
  - `http://static.startribune.com/assets/libs/d3-legend/2.25.4/d3-legend.min.js`
- [D3 Annotation](http://d3-annotation.susielu.com/) - `./libs/d3-annotation`
  - `http://static.startribune.com/assets/libs/d3/2.3.0/d3-annotation.min.js`
- [C3](https://c3js.org/) - `./libs/c3/`
  - `http://static.startribune.com/assets/libs/c3/0.6.7/c3.min.js`
  - `http://static.startribune.com/assets/libs/c3/0.6.7/c3.min.css`
- [jQuery](https://jquery.com/) - `./libs/jquery/`
  - `http://static.startribune.com/assets/libs/jquery/3.2.1/jquery.min.js`
- [jQuery ScrollTo](https://github.com/flesler/jquery.scrollTo) - `./libs/jquery-scrollTo/`
  - `http://static.startribune.com/assets/libs/jquery-scrollTo/2.1.2/jquery.scrollTo.min.js`
- [Selectize](https://selectize.github.io/selectize.js/) - `./libs/selectizejs/`
  - `http://static.startribune.com/assets/libs/selectizejs/0.12.6/js/selectize.min.js`
  - `http://static.startribune.com/assets/libs/selectizejs/0.12.6/css/selectize.css`
- [object-fit-images](https://www.npmjs.com/package/object-fit-images) - `./libs/object-fit-images/`
  - `http://static.startribune.com/assets/libs/object-fit-images/3.2.3/ofi.min.css`
- [noUISlider](https://refreshless.com/nouislider/) - `./libs/nouislider/`
  - `http://static.startribune.com/assets/libs/nouislider/11.0.3/nouislider.min.js`
  - `http://static.startribune.com/assets/libs/nouislider/11.0.3/nouislider.min.css`
- [nodep-date-input-polyfill](https://www.npmjs.com/package/nodep-date-input-polyfill) - `./libs/nodep-date-input-polyfill`
  - `http://static.startribune.com/assets/libs/nodep-date-input-polyfill/5.2.0/nodep-date-input-polyfill.dist.js`
- [typeahead.js](https://github.com/twitter/typeahead.js) - `./libs/typeahead.js` - Note that this library is rather old.
  - `http://static.startribune.com/assets/libs/typeahead.js/0.11.1/typeahead.bundle.min.js`
- Omniture - This is a custom version of the Omniture JS include for Star Tribune - `./libs/omniture-strib/`
  - `http://static.startribune.com/assets/libs/omniture-strib/H.20.3/omniture-strib.min.js`
- Strib fonts - These are owned by WebType and cannot be reused without permission, and are here for internal ease of use only - `./libs/strib-fonts/`
  - `http://static.startribune.com/assets/libs/strib-fonts/0.0.1/*/*`
- [Strib icons](https://striblab.github.io/strib-icons/) - These are property of Star Tribune - `./libs/strib-icons/`
  - `http://static.startribune.com/assets/libs/strib-icons/0.0.10/strib-icons.css`
  - `http://static.startribune.com/assets/libs/strib-icons/0.0.10/strib-icons.js`
- [Strib styles](https://striblab.github.io/strib-styles/) - Star Tribune (interactive) style library.
  - `http://static.startribune.com/assets/libs/strib-styles/0.10.1/strib-styles.default.css`
