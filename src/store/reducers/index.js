/**
 * import { connect } from "react-redux"; 需要用到的页面
 * 这句连接之后，需要展示的
 */

import getIndexRedu from "./indexRedu";
import getIndexListFilmReduc from "./indexListFilmReduc";
import getSeasonRedu from "./seasonRedu";
import getSeasonEpRedu from "./seasonEpRedu";
import getSeasonInfoRedu from "./seasonInfoRedu";
import getTvInfoRedu from "./tvInfoRedu";
import getTvInfoNextEpRedu from "./tvInfoNextEpRedu";
import getTvInfoNextSeasonRedu from "./tvInfoNextSeasonRedu";
import getTvInfoActorRedu from "./tvInfoActorRedu";

export default {
    getIndexRedu,
    getIndexListFilmReduc,
    getSeasonRedu,
    getSeasonEpRedu,
    getSeasonInfoRedu,
    getTvInfoRedu,
    getTvInfoNextEpRedu,
    getTvInfoNextSeasonRedu,
    getTvInfoActorRedu,
}

