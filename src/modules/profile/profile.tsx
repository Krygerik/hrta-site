import {Button, Dropdown, Header, Loader, Menu, Message} from "semantic-ui-react";
import * as React from "react";
import {TProfileConnectedProps, withProfileConnector} from "./profile-connector";
import {AuthorizationModal} from "./modals/authorization-modal";
import {RegistrationModal} from "./modals/registration";
import { useHistory } from "react-router-dom";

type TProps = TProfileConnectedProps;

/**
 * Профиль игрока в шапке
 */
const Profile = React.memo((props: TProps) => {
    const [isOpenRegModal, setRegModalOpenStatus] = React.useState(false);
    const [isOpenAuthModal, setAuthModalOpenStatus] = React.useState(false);

    const history = useHistory();

    /**
     * Обработчик выхода из аккаунта
     */
    const handleOnClickLogout = () => props.removeProfileData();

    /**
     * Обработчик захода в свой профиль
     */
    const handleClickMyProfile = () => history.push(`/profile/${props.profile?._id}`);

    /**
     * Запрос профиля
     */
    React.useEffect(() => {
        if (!props.profile) {
            props.fetchProfile();
        }
    }, []);

    if (props.isErrorFetch) {
        return (
            <Menu.Item position="right">
                <Message
                    color="red"
                    content="Ошибка при запросе профиля"
                />
            </Menu.Item>
        );
    }

    if (props.isFetchingStatus) {
       return <Loader active inline="centered" size="large" />;
    }

    return (
        <>
            <AuthorizationModal
                open={isOpenAuthModal}
                setOpen={setAuthModalOpenStatus}
            />
            <RegistrationModal
                open={isOpenRegModal}
                setOpen={setRegModalOpenStatus}
            />
            {
                props.profile && (
                    <Dropdown as={Header} text="Профиль" className='right item'>
                        <Dropdown.Menu>
                            <Dropdown.Header content={props.profile.nickname} />
                            <Dropdown.Divider />
                            <Dropdown.Item
                                as={'a'}
                                content="Мой профиль"
                                onClick={handleClickMyProfile}
                            />
                            <Dropdown.Item
                                content="Выход"
                                onClick={handleOnClickLogout}
                            />
                        </Dropdown.Menu>
                    </Dropdown>
                )
            }
            {
                !props.profile && (
                    <Menu.Item position="right">
                        <Button
                            content="Войти"
                            onClick={() => setAuthModalOpenStatus(true)}
                        />
                        <Button
                            content="Зарегистрироваться"
                            primary
                            style={{ marginLeft: '0.5em' }}
                            onClick={() => setRegModalOpenStatus(true)}
                        />
                    </Menu.Item>
                )
            }
        </>
    )
});

export const ProfileController = withProfileConnector(Profile);
