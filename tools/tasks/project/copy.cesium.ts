import * as gulp from 'gulp';

import Config from '../../config';
import {join} from "path";

/**
 * This sample task copies all TypeScript files over to the appropiate `dist/dev|prod|test` directory, depending on the
 * current application environment.
 */
export = () => {
  return gulp.src(Config.CESIUM_LOCATION)
    .pipe(gulp.dest(join(Config.JS_DEST, Config.CESIUM_FOLDER_NAME)));
};
