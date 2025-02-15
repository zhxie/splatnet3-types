import { LinkedFieldType, OperationFieldType, UnknownScalarType } from '../generated-type-helpers.js';
import { Badge, Color, Image, Nameplate, NameplateBackground, Player, SpecialWeapon, SubWeapon, Weapon, XRanking, XRankingHolder, XRankingHolderConnection, XRankingPlayer, XRankingPlayerStats, XRankingSeason, XRankingSeasonConnection } from '../types.js';

/**
 * d771444f2584d938db8d10055599011d XRankingQuery
 *
 * query XRankingQuery
 *
 * Generated 27/02/2023 from SplatNet 3 3.0.0-2857bc50.
 */
interface XRankingQuery_d771444 {
    xRanking: /** XRanking */ OperationFieldType<'XRankingQuery', 'xRanking', {
        currentSeason: /** XRankingSeason */ LinkedFieldType<XRanking, 'currentSeason', {
            id: XRankingSeason['id'];
            endTime: XRankingSeason['endTime'];
            isCurrent: XRankingSeason['isCurrent'];
            lastUpdateTime: XRankingSeason['lastUpdateTime'];
            name: XRankingSeason['name'];
            startTime: XRankingSeason['startTime'];
            xRankingAr: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'xRankingAr', {
                nodes: /** XRankingHolder */ LinkedFieldType<XRankingHolderConnection, 'nodes', ({
                    id: XRankingHolder['id'];
                    name: XRankingHolder['name'];
                    rank: XRankingHolder['rank'];
                    weapon: /** Weapon */ LinkedFieldType<XRankingHolder, 'weapon', {
                        id: Weapon['id'];
                        image: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image2d: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image2dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image3d: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image3dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Weapon['name'];
                        specialWeapon: /** SpecialWeapon */ LinkedFieldType<Weapon, 'specialWeapon', {
                            id: SpecialWeapon['id'];
                            image: /** Image */ LinkedFieldType<SpecialWeapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: SpecialWeapon['name'];
                        }, false>;
                        subWeapon: /** SubWeapon */ LinkedFieldType<Weapon, 'subWeapon', {
                            id: SubWeapon['id'];
                            image: /** Image */ LinkedFieldType<SubWeapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: SubWeapon['name'];
                        }, false>;
                    }, false>;
                    weaponTop: XRankingHolder['weaponTop'];
                    xPower: XRankingHolder['xPower'];
                }) & (/** Player */ {
                    __isPlayer: 'Player';
                    byname: Player['byname'];
                    nameId: Player['nameId'];
                    nameplate: /** Nameplate */ LinkedFieldType<Player, 'nameplate', {
                        background: /** NameplateBackground */ LinkedFieldType<Nameplate, 'background', {
                            id: NameplateBackground['id'];
                            image: /** Image */ LinkedFieldType<NameplateBackground, 'image', {
                                url: Image['url'];
                            }, false>;
                            textColor: /** Color */ LinkedFieldType<NameplateBackground, 'textColor', {
                                r: Color['r'];
                                g: Color['g'];
                                b: Color['b'];
                                a: Color['a'];
                            }, false>;
                        }, false>;
                        badges: /** Badge */ LinkedFieldType<Nameplate, 'badges', {
                            id: Badge['id'];
                            image: /** Image */ LinkedFieldType<Badge, 'image', {
                                url: Image['url'];
                            }, false>;
                        }, true>;
                    }, false>;
                }), true>;
            }, false>;
            xRankingCl: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'xRankingCl', {
                nodes: /** XRankingHolder */ LinkedFieldType<XRankingHolderConnection, 'nodes', ({
                    id: XRankingHolder['id'];
                    name: XRankingHolder['name'];
                    rank: XRankingHolder['rank'];
                    weapon: /** Weapon */ LinkedFieldType<XRankingHolder, 'weapon', {
                        id: Weapon['id'];
                        image: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image2d: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image2dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image3d: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image3dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Weapon['name'];
                        specialWeapon: /** SpecialWeapon */ LinkedFieldType<Weapon, 'specialWeapon', {
                            id: SpecialWeapon['id'];
                            image: /** Image */ LinkedFieldType<SpecialWeapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: SpecialWeapon['name'];
                        }, false>;
                        subWeapon: /** SubWeapon */ LinkedFieldType<Weapon, 'subWeapon', {
                            id: SubWeapon['id'];
                            image: /** Image */ LinkedFieldType<SubWeapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: SubWeapon['name'];
                        }, false>;
                    }, false>;
                    weaponTop: XRankingHolder['weaponTop'];
                    xPower: XRankingHolder['xPower'];
                }) & (/** Player */ {
                    __isPlayer: 'Player';
                    byname: Player['byname'];
                    nameId: Player['nameId'];
                    nameplate: /** Nameplate */ LinkedFieldType<Player, 'nameplate', {
                        background: /** NameplateBackground */ LinkedFieldType<Nameplate, 'background', {
                            id: NameplateBackground['id'];
                            image: /** Image */ LinkedFieldType<NameplateBackground, 'image', {
                                url: Image['url'];
                            }, false>;
                            textColor: /** Color */ LinkedFieldType<NameplateBackground, 'textColor', {
                                r: Color['r'];
                                g: Color['g'];
                                b: Color['b'];
                                a: Color['a'];
                            }, false>;
                        }, false>;
                        badges: /** Badge */ LinkedFieldType<Nameplate, 'badges', {
                            id: Badge['id'];
                            image: /** Image */ LinkedFieldType<Badge, 'image', {
                                url: Image['url'];
                            }, false>;
                        }, true>;
                    }, false>;
                }), true>;
            }, false>;
            xRankingGl: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'xRankingGl', {
                nodes: /** XRankingHolder */ LinkedFieldType<XRankingHolderConnection, 'nodes', ({
                    id: XRankingHolder['id'];
                    name: XRankingHolder['name'];
                    rank: XRankingHolder['rank'];
                    weapon: /** Weapon */ LinkedFieldType<XRankingHolder, 'weapon', {
                        id: Weapon['id'];
                        image: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image2d: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image2dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image3d: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image3dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Weapon['name'];
                        specialWeapon: /** SpecialWeapon */ LinkedFieldType<Weapon, 'specialWeapon', {
                            id: SpecialWeapon['id'];
                            image: /** Image */ LinkedFieldType<SpecialWeapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: SpecialWeapon['name'];
                        }, false>;
                        subWeapon: /** SubWeapon */ LinkedFieldType<Weapon, 'subWeapon', {
                            id: SubWeapon['id'];
                            image: /** Image */ LinkedFieldType<SubWeapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: SubWeapon['name'];
                        }, false>;
                    }, false>;
                    weaponTop: XRankingHolder['weaponTop'];
                    xPower: XRankingHolder['xPower'];
                }) & (/** Player */ {
                    __isPlayer: 'Player';
                    byname: Player['byname'];
                    nameId: Player['nameId'];
                    nameplate: /** Nameplate */ LinkedFieldType<Player, 'nameplate', {
                        background: /** NameplateBackground */ LinkedFieldType<Nameplate, 'background', {
                            id: NameplateBackground['id'];
                            image: /** Image */ LinkedFieldType<NameplateBackground, 'image', {
                                url: Image['url'];
                            }, false>;
                            textColor: /** Color */ LinkedFieldType<NameplateBackground, 'textColor', {
                                r: Color['r'];
                                g: Color['g'];
                                b: Color['b'];
                                a: Color['a'];
                            }, false>;
                        }, false>;
                        badges: /** Badge */ LinkedFieldType<Nameplate, 'badges', {
                            id: Badge['id'];
                            image: /** Image */ LinkedFieldType<Badge, 'image', {
                                url: Image['url'];
                            }, false>;
                        }, true>;
                    }, false>;
                }), true>;
            }, false>;
            xRankingLf: /** XRankingHolderConnection */ LinkedFieldType<XRankingSeason, 'xRankingLf', {
                nodes: /** XRankingHolder */ LinkedFieldType<XRankingHolderConnection, 'nodes', ({
                    id: XRankingHolder['id'];
                    name: XRankingHolder['name'];
                    rank: XRankingHolder['rank'];
                    weapon: /** Weapon */ LinkedFieldType<XRankingHolder, 'weapon', {
                        id: Weapon['id'];
                        image: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image2d: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image2dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image3d: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        image3dThumbnail: /** Image */ LinkedFieldType<Weapon, 'image', {
                            url: Image['url'];
                        }, false>;
                        name: Weapon['name'];
                        specialWeapon: /** SpecialWeapon */ LinkedFieldType<Weapon, 'specialWeapon', {
                            id: SpecialWeapon['id'];
                            image: /** Image */ LinkedFieldType<SpecialWeapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: SpecialWeapon['name'];
                        }, false>;
                        subWeapon: /** SubWeapon */ LinkedFieldType<Weapon, 'subWeapon', {
                            id: SubWeapon['id'];
                            image: /** Image */ LinkedFieldType<SubWeapon, 'image', {
                                url: Image['url'];
                            }, false>;
                            name: SubWeapon['name'];
                        }, false>;
                    }, false>;
                    weaponTop: XRankingHolder['weaponTop'];
                    xPower: XRankingHolder['xPower'];
                }) & (/** Player */ {
                    __isPlayer: 'Player';
                    byname: Player['byname'];
                    nameId: Player['nameId'];
                    nameplate: /** Nameplate */ LinkedFieldType<Player, 'nameplate', {
                        background: /** NameplateBackground */ LinkedFieldType<Nameplate, 'background', {
                            id: NameplateBackground['id'];
                            image: /** Image */ LinkedFieldType<NameplateBackground, 'image', {
                                url: Image['url'];
                            }, false>;
                            textColor: /** Color */ LinkedFieldType<NameplateBackground, 'textColor', {
                                r: Color['r'];
                                g: Color['g'];
                                b: Color['b'];
                                a: Color['a'];
                            }, false>;
                        }, false>;
                        badges: /** Badge */ LinkedFieldType<Nameplate, 'badges', {
                            id: Badge['id'];
                            image: /** Image */ LinkedFieldType<Badge, 'image', {
                                url: Image['url'];
                            }, false>;
                        }, true>;
                    }, false>;
                }), true>;
            }, false>;
        }, false>;
        pastSeasons: /** XRankingSeasonConnection */ LinkedFieldType<XRanking, 'pastSeasons', {
            nodes: /** XRankingSeason */ LinkedFieldType<XRankingSeasonConnection, 'nodes', {
                id: XRankingSeason['id'];
                endTime: XRankingSeason['endTime'];
                name: XRankingSeason['name'];
                startTime: XRankingSeason['startTime'];
            }, true>;
        }, false>;
        player: /** XRankingPlayer */ LinkedFieldType<XRanking, 'player', {
            name: XRankingPlayer['name'];
            statsAr: /** XRankingPlayerStats */ LinkedFieldType<XRankingPlayer, 'statsAr', {
                lastXPower: XRankingPlayerStats['lastXPower'];
                weapon: /** Weapon */ LinkedFieldType<XRankingPlayerStats, 'weapon', {
                    id: Weapon['id'];
                    image: /** Image */ LinkedFieldType<Weapon, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: Weapon['name'];
                }, false>;
            }, false>;
            statsCl: /** XRankingPlayerStats */ LinkedFieldType<XRankingPlayer, 'statsCl', {
                lastXPower: XRankingPlayerStats['lastXPower'];
                weapon: /** Weapon */ LinkedFieldType<XRankingPlayerStats, 'weapon', {
                    id: Weapon['id'];
                    image: /** Image */ LinkedFieldType<Weapon, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: Weapon['name'];
                }, false>;
            }, false>;
            statsGl: /** XRankingPlayerStats */ LinkedFieldType<XRankingPlayer, 'statsGl', {
                lastXPower: XRankingPlayerStats['lastXPower'];
                weapon: /** Weapon */ LinkedFieldType<XRankingPlayerStats, 'weapon', {
                    id: Weapon['id'];
                    image: /** Image */ LinkedFieldType<Weapon, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: Weapon['name'];
                }, false>;
            }, false>;
            statsLf: /** XRankingPlayerStats */ LinkedFieldType<XRankingPlayer, 'statsLf', {
                lastXPower: XRankingPlayerStats['lastXPower'];
                weapon: /** Weapon */ LinkedFieldType<XRankingPlayerStats, 'weapon', {
                    id: Weapon['id'];
                    image: /** Image */ LinkedFieldType<Weapon, 'image', {
                        url: Image['url'];
                    }, false>;
                    name: Weapon['name'];
                }, false>;
            }, false>;
            userIcon: /** Image */ LinkedFieldType<XRankingPlayer, 'userIcon', {
                url: Image['url'];
            }, false>;
        }, false>;
        region: XRanking['region'];
    }>;
}

export default XRankingQuery_d771444;
export { XRankingQuery_d771444 };
