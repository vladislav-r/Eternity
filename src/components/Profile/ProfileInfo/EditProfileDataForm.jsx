import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import React from "react";

const EditProfileDataForm= (props) => {
    return (
        <div >
            <form >
                <div>
                    <Field placeholder={'Юзернейм'} name={'fullName'} component={'input'} type={'text'}/>
                </div>
                <div >
                    <label htmlFor="">Ищу работу</label>
                    <Field type={'checkbox'} name={'lookingForAJob'} component={'input'} />
                </div>
                <div>
                    <label htmlFor="lookingForAJobDescription">Мои навыки</label>
                    <Field placeholder={'Можете написать'} type={'text'} name={'lookingForAJobDescription'} component={'textarea'} />
                </div>
                <div>
                    <button>Сохранить</button>
                </div>
            </form>
            {/*<PreloaderNew />*/}
        </div>
    )
}
const EditProfileDataFormReduxForm = reduxForm({form: 'editProfileForm'})(EditProfileDataForm)

export default  EditProfileDataFormReduxForm