import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { CoopBossResult, CoopEnemy, CoopGrade, CoopGroupHighestResult, CoopHistoryDetail, CoopHistoryDetailConnection, CoopHistoryGroup, CoopHistoryGroupConnection, CoopPlayerResult, CoopPointCard, CoopResult, CoopScale, CoopStage, CoopSupplyWeapon, CoopWaveResult, Image } from '../types.js';

/**
 * 7edc52165b95dcb2b8a1c14c31e1d5b1 CoopHistoryQuery
 *
 * query CoopHistoryQuery
 *
 * Generated 25/01/2023 from SplatNet 3 2.0.0-7070f95e.
 */
interface CoopHistoryQuery_7edc521 {
    coopResult: /** CoopResult */ OperationFieldType<'CoopHistoryQuery', 'coopResult', {
        historyGroups: /** CoopHistoryGroupConnection */ LinkedFieldType<CoopResult, 'historyGroups', {
            nodes: /** CoopHistoryGroup */ LinkedFieldType<CoopHistoryGroupConnection, 'nodes', {
                endTime: CoopHistoryGroup['endTime'];
                highestResult: /** CoopGroupHighestResult */ LinkedFieldType<CoopHistoryGroup, 'highestResult', {
                    grade: /** CoopGrade */ LinkedFieldType<CoopGroupHighestResult, 'grade', {
                        id: CoopGrade['id'];
                        name: CoopGrade['name'];
                    }, false>;
                    gradePoint: CoopGroupHighestResult['gradePoint'];
                    jobScore: CoopGroupHighestResult['jobScore'];
                    trophy: CoopGroupHighestResult['trophy'];
                }, false>;
                historyDetails: /** CoopHistoryDetailConnection */ LinkedFieldType<CoopHistoryGroup, 'historyDetails', {
                    nodes: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetailConnection, 'nodes', {
                        id: CoopHistoryDetail['id'];
                        afterGrade: /** CoopGrade */ LinkedFieldType<CoopHistoryDetail, 'afterGrade', {
                            id: CoopGrade['id'];
                            name: CoopGrade['name'];
                        }, false>;
                        afterGradePoint: CoopHistoryDetail['afterGradePoint'];
                        bossResult: /** CoopBossResult */ LinkedFieldType<CoopHistoryDetail, 'bossResult', {
                            boss: /** CoopEnemy */ LinkedFieldType<CoopBossResult, 'boss', {
                                id: CoopEnemy['id'];
                                name: CoopEnemy['name'];
                            }, false>;
                            hasDefeatBoss: CoopBossResult['hasDefeatBoss'];
                        }, false>;
                        coopStage: /** CoopStage */ LinkedFieldType<CoopHistoryDetail, 'coopStage', {
                            id: CoopStage['id'];
                            name: CoopStage['name'];
                        }, false>;
                        gradePointDiff: CoopHistoryDetail['gradePointDiff'];
                        memberResults: /** CoopPlayerResult */ LinkedFieldType<CoopHistoryDetail, 'memberResults', {
                            deliverCount: CoopPlayerResult['deliverCount'];
                        }, true>;
                        myResult: /** CoopPlayerResult */ LinkedFieldType<CoopHistoryDetail, 'myResult', {
                            deliverCount: CoopPlayerResult['deliverCount'];
                        }, false>;
                        nextHistoryDetail: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetail, 'nextHistoryDetail', {
                            id: CoopHistoryDetail['id'];
                        }, false>;
                        previousHistoryDetail: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetail, 'previousHistoryDetail', {
                            id: CoopHistoryDetail['id'];
                        }, false>;
                        resultWave: CoopHistoryDetail['resultWave'];
                        waveResults: /** CoopWaveResult */ LinkedFieldType<CoopHistoryDetail, 'waveResults', {
                            teamDeliverCount: CoopWaveResult['teamDeliverCount'];
                        }, true>;
                        weapons: /** CoopSupplyWeapon */ LinkedFieldType<CoopHistoryDetail, 'weapons', {
                            image: /** Image */ LinkedFieldType<CoopSupplyWeapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: CoopSupplyWeapon['name'];
                        }, true>;
                    }, true>;
                }, false>;
                mode: CoopHistoryGroup['mode'];
                rule: CoopHistoryGroup['rule'];
                startTime: CoopHistoryGroup['startTime'];
            }, true>;
        }, false>;
        historyGroupsOnlyFirst: /** CoopHistoryGroupConnection */ LinkedFieldType<CoopResult, 'historyGroups', {
            nodes: /** CoopHistoryGroup */ LinkedFieldType<CoopHistoryGroupConnection, 'nodes', {
                historyDetails: /** CoopHistoryDetailConnection */ LinkedFieldType<CoopHistoryGroup, 'historyDetails', {
                    nodes: /** CoopHistoryDetail */ LinkedFieldType<CoopHistoryDetailConnection, 'nodes', {
                        __typename: 'CoopHistoryDetail';
                        id: CoopHistoryDetail['id'];
                    }, true>;
                }, false>;
            }, true>;
        }, false>;
        monthlyGear: /** unknown type */ LinkedFieldType<CoopResult, 'monthlyGear', {
            __typename: string;
            image: /** Image */ LinkedFieldType<CoopResult['monthlyGear'], 'image', {
                url: Image['url'];
            }, false>;
            name: CoopResult['monthlyGear']['name'];
        }, false>;
        pointCard: /** CoopPointCard */ LinkedFieldType<CoopResult, 'pointCard', {
            defeatBossCount: CoopPointCard['defeatBossCount'];
            deliverCount: CoopPointCard['deliverCount'];
            goldenDeliverCount: CoopPointCard['goldenDeliverCount'];
            playCount: CoopPointCard['playCount'];
            regularPoint: CoopPointCard['regularPoint'];
            rescueCount: CoopPointCard['rescueCount'];
            totalPoint: CoopPointCard['totalPoint'];
        }, false>;
        regularAverageClearWave: CoopResult['regularAverageClearWave'];
        regularGrade: /** CoopGrade */ LinkedFieldType<CoopResult, 'regularGrade', {
            id: CoopGrade['id'];
            name: CoopGrade['name'];
        }, false>;
        regularGradePoint: CoopResult['regularGradePoint'];
        scale: /** CoopScale */ LinkedFieldType<CoopResult, 'scale', {
            bronze: CoopScale['bronze'];
            gold: CoopScale['gold'];
            silver: CoopScale['silver'];
        }, false>;
    }>;
}

export default CoopHistoryQuery_7edc521;
export { CoopHistoryQuery_7edc521 };
