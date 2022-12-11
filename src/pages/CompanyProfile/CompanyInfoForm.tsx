import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const StudentInfoForm = () => {
    const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
    const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
        setComponentDisabled(disabled);
    };

    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}
            >
                <Form.Item label="Название">
                    <Input />
                </Form.Item>
                <Form.Item label="Адрес">
                    <Input />
                </Form.Item>
                <Form.Item label="Ссылка на логотип">
                    <Input />
                </Form.Item>
            </Form>

            <div className="flex flex-col gap-4 items-center">
                <p className="text-2xl text-center">
                    Хорошее резюме - это резюме, которое писалось и переписывалось!
                </p>
                <p className="text-xl text-center">
                    Создай и размести свое резюме.
                </p>
                <Button type="primary">Создать</Button>
            </div>
        </>
    );
};

export default StudentInfoForm;
