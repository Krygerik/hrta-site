import {isEmpty} from "lodash";
import * as React from "react";
import {Segment} from "semantic-ui-react";
import {EDictionaryName} from "../../../../modules/dictionary";
import {DictionaryArmyList} from "../../../../modules/dictionary-army-list";
import {DictionaryCardList} from "../../../../modules/dictionary-card-list";
import {DictionaryHero} from "../../../../modules/dictionary-hero";
import {DictionaryTableList} from "../../../../modules/dictionary-table-list";
import {TPlayer} from "../../game-types";
import {AdditionalProperties, HeroPropertiesTable} from "./components";
import {mapPlayerColorToSegmentColor} from "./player-info-utils";

type TProps = {
    player: TPlayer;
};

/**
 * Компонент отображения данных об игроке
 */
export const PlayerInfo = React.memo((props: TProps) => (
    <>
        <Segment
            attached="top"
            color={mapPlayerColorToSegmentColor(props.player.color)}
            content={props.player.nickname}
            inverted={true}
            size="massive"
            textAlign="center"
        />
        <Segment attached="bottom">
            <DictionaryHero hero={props.player.hero} />
            <HeroPropertiesTable player={props.player} />
            <AdditionalProperties player={props.player} />
            <DictionaryArmyList
                header="Армия игрока"
                list={props.player.army}
            />
            <DictionaryCardList
                list={props.player.war_machines}
                type={EDictionaryName.WarMachines}
            />
            <DictionaryCardList
                list={props.player.spells}
                type={EDictionaryName.Spells}
            />
            <DictionaryTableList
                header="Школы"
                list={props.player.skills}
                type={EDictionaryName.Skills}
            />
            <DictionaryTableList
                header="Навыки"
                list={props.player.perks}
                type={EDictionaryName.Perks}
            />
            <DictionaryCardList
                list={props.player.arts}
                type={EDictionaryName.Artifacts}
            />
            {
                !isEmpty(props.player.army_remainder) && (
                    <DictionaryArmyList
                        header="Конечная армия игрока"
                        list={props.player.army_remainder}
                    />
                )
            }
        </Segment>
    </>
));
