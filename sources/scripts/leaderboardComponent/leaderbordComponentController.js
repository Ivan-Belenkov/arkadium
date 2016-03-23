/**
 * Created by Ivan on 19.03.2016.
 */

import leaderboardComponentTemplate from "./leaderboardComponentTemplate.html";

class LeaderboardComponentController {
    constructor($scope, $window, dataRetriever) {
        let _ctrl = this,
            _window = angular.element($window),
            personsScrollbarsConfigVariants = {
                wide: {
                    axis: 'x'
                },
                narrow: {
                    axis: 'y'
                }
            };

        _ctrl.scope = $scope;
        _ctrl.dataRetriever = dataRetriever;

        _ctrl.personsScrollbarsConfig = _window.width() >= 560 ?
            personsScrollbarsConfigVariants.wide : personsScrollbarsConfigVariants.narrow;
        _ctrl.gamelistScrollbarsConfig = {
            axis: 'y'
        };

        _ctrl.scope.$watch(function () {
            return _window.width();
        },function(newVal, oldVal) {
            if (newVal >= 560 && oldVal < 560) {
                _ctrl.personsScrollbarsConfig = personsScrollbarsConfigVariants.wide;
            }
            if (newVal < 560 && oldVal >= 560 ) {
                _ctrl.personsScrollbarsConfig = personsScrollbarsConfigVariants.narrow;
            }
        }, true);

        _window.on("resize", function() {
            //$scope.width = _window.width();
            $scope.$apply();
        });

        /*
        * Period selection tabs
        * */

        _ctrl.periods = [
            {
                periodKey: "today",
                text: "today"
            },
            {
                periodKey: "week",
                text: "this week"
            },
            {
                periodKey: "all",
                text: "all time"
            }
        ];
        _ctrl.activePeriod = _ctrl.periods[0]; // initital value

        /*
        * Game selection menu
        * */

        _ctrl.games = [
            {
                gameKey: "all_games",
                text: "all games"
            },
            {
                id: "eggz",
                gameKey: "eggz_1",
                text: "eggz"
            },
            {
                id: "spider_solitaire",
                gameKey: "spider_solitaire_1",
                text: "spider solitaire"
            },
            {
                id: "jigsaw",
                gameKey: "jigsaw_1",
                text: "jigsaw"
            },
            {
                id: "eggz",
                gameKey: "eggz_2",
                text: "eggz"
            },
            {
                id: "spider_solitaire",
                gameKey: "spider_solitaire_2",
                text: "spider solitaire"
            },
            {
                id: "jigsaw",
                gameKey: "jigsaw_2",
                text: "jigsaw"
            },
            {
                id: "eggz",
                gameKey: "eggz_3",
                text: "eggz"
            },
            {
                id: "spider_solitaire",
                gameKey: "spider_solitaire_3",
                text: "spider solitaire"
            },
            {
                id: "jigsaw",
                gameKey: "jigsaw_3",
                text: "jigsaw"
            },
            {
                id: "eggz",
                gameKey: "eggz_4",
                text: "eggz"
            },
            {
                id: "spider_solitaire",
                gameKey: "spider_solitaire_4",
                text: "spider solitaire"
            },
            {
                id: "jigsaw",
                gameKey: "jigsaw_4",
                text: "jigsaw"
            },
            {
                id: "spider_solitaire",
                gameKey: "spider_solitaire_5",
                text: "spider solitaire"
            }
        ];

        _ctrl.activeGame = _ctrl.games[0]; // initital value

        /*
        * Leaderboard list
        * */

        _ctrl.leaderboard = [];

        _ctrl.getData(_ctrl.activePeriod, _ctrl.activeGame);
    }

    toggleGameList() {
        angular.element("body").toggleClass("gamelist-opened");
    };

    setActivePeriod(obj, e) {
        if (this.activePeriod !== obj) {
            this.activePeriod = obj;
            this.getData(this.activePeriod, this.activeGame);
            this.updateScrollbar("scrollTo", 0);
        }
        e.preventDefault();
    };

    setActiveGame(obj, e) {
        if (this.activeGame !== obj) {
            this.activeGame = obj;
            this.getData(this.activePeriod, this.activeGame);
            this.updateScrollbar("scrollTo", 0);
        }
        e.preventDefault();
    };

    getData(period, game) {
        this.dataRetriever(period, game).then(data => {
            this.leaderboard = data;
        });
    }
}

let leaderboardComponentDefinition = {
    template: leaderboardComponentTemplate,
    controller: ["$scope", "$window", "dataRetrieverService", LeaderboardComponentController]
};

export default leaderboardComponentDefinition;