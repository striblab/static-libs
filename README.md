# Static Libs

Repo of libraries hosted on our CDN. The main reason this exists, as opposed to using another CDN, is that we have a bit more control over it in case something goes wrong. Also, we are able to put our own or unpopular libs into this CDN that might not be on something like [CDNJS](https://cdnjs.com/).

It is important to make sure to use specific versions in front-end applications, as opposed to something like _latest_ or _3.x_, because it is more likely that a new version will break something instead of fix something.

## Adding libraries

1. (optional) If this is the first time including this library and not just another version, add an entry to the **Libraries** section below. This helps to know what is included and help distinguish libraries that might have similar names.
1. Get the production-ready files, such as minified JS or CSS files. There is no need to include files like the README.md. The `LICENSE` file is suggested, but not necessary.
   * Using files from [CDNJS](https://cdnjs.com/) is an easy method.
1. Add to the `libs` folder in the format `libs/<LIBRARY-NAME>/<VERSION>/<BUILT-FILE>.xx`.
   * `<LIBRARY-NAME>`: The URL-friendly, preferably lowercase, name of the library.
   * `<VERSION>`: The exact version of the library being included. Hopefully this follows [semver](http://semver.org/), but should follow the version used by the project. This could be something like the following:
     * `3.1.0`
     * `v2.3`
     * `master-20170633`
     * `dev-branch-8938abbd0923bd`
     * `commit-209ba98b375fcd`
     * `fork-zzolo-45834bb3cc90dd`
   * `<BUILT-FILE>.xx`: The production-ready file, such as `library-min.js`. Most libraries should only have a handful of files and no sub-directories.

## Publishing

Make sure the following is done, but note that it should only be done once:

1. Ensure you have access to the `static.startribune.com` S3 bucket.
1. [Install the AWS Command Line tool (awscli)](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
1. [Configure awscli](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

To publish to AWS:

* Do all: `aws s3 sync ./libs/ s3://static.startribune.com/assets/libs/ --acl "public-read" --cache-control="public, max-age=31536000"`
* A specific library version: `aws s3 sync ./libs/<LIBRARY-NAME>/<VERSION>/ s3://static.startribune.com/assets/libs/<LIBRARY-NAME>/<VERSION>/ --acl "public-read" --cache-control="public, max-age=31536000"`

## Accessing

The libraries will be available at the following URL:

    http://static.startribune.com/assets/libs/<LIBRARY-NAME>/<VERSION>/<BUILT-FILE>.xx

_Note that `static.startribune.com` does not support HTTPS currently._

## Example

The following is a quick example using [Underscore.JS](http://underscorejs.org/).

1. Find the Underscore page on [CDNJS](https://cdnjs.com/libraries/underscore.js).
1. Download locally:
   1. `mkdir -p libs/underscore.js/1.8.3/`
   1. `wget https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js -O ./libs/underscore.js/1.8.3/underscore-min.js`
   1. `wget https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.map -O ./libs/underscore.js/1.8.3/underscore-min.map`
   1. `wget https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js -O ./libs/underscore.js/1.8.3/underscore.js`
1. Check the files locally.
1. Publish: `aws s3 sync ./libs/underscore.js/1.8.3/ s3://static.startribune.com/assets/libs/underscore.js/1.8.3/ --acl "public-read" --cache-control="public, max-age=31536000"`
   * If you are managing multiple AWS profiles, you can add the `--profile strib` flag to the command.
1. The main file will be accessible at: `http://static.startribune.com/assets/libs/underscore.js/1.8.3/underscore-min.js`

## Libraries

This is (hopefully) an up to date list of libraries included in this project:

* [Underscore.js](http://underscorejs.org/) - `./libs/underscore.js/`
* [Pym.js](http://blog.apps.npr.org/pym.js/) - `./libs/pym.js/`
* [Lodash](https://lodash.com/) - `./libs/lodash/`
* [Moment.js](https://momentjs.com/) - `./libs/moment.js/`
* [Topojson](https://github.com/topojson/topojson) - `./libs/topojson/`
* [D3](https://d3js.org/) - `./libs/d3/`
* [jQuery](https://jquery.com/) - `./libs/jquery/`
* [object-fit-images](https://www.npmjs.com/package/object-fit-images) - `./libs/object-fit-images/`
