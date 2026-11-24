# CPPWRF project website

Static website for [cppwrf.github.io](https://cppwrf.github.io/) in the `cppwrf/cppwrf.github.io` repository.

Open `index.html` in a browser, or serve the repository root locally.

```sh
python3 -m http.server --bind 127.0.0.1 8000
```

For GitHub Pages, publish from the repository branch and its root directory. The root includes `.nojekyll` so GitHub Pages can serve the files directly. The site uses HTML and CSS with local figure images and system fonts.

The release documentation links point to [CPPWRF v1.4.0](https://github.com/Xassemblianist/CPPWRF/tree/v1.4.0). Verification counts refer to that release. The performance tables and plots come from the paper draft, which benchmarked the model code of CPPWRF v1.2.1 (`fa797b3`). When updating the site, keep the tested release and the timed build explicit.
