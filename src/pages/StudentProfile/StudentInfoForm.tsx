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
                <Form.Item label="Имя">
                    <Input />
                </Form.Item>
                <Form.Item label="Фамиля">
                    <Input />
                </Form.Item>
                <Form.Item label="Отчество">
                    <Input />
                </Form.Item>
                <Form.Item label="ИСУ">
                    <Input />
                </Form.Item>
                <Form.Item label="Город">
                    <Input />
                </Form.Item>
                <Form.Item label="Навыки">
                    <Select>
                        <Select.Option value="django">Django</Select.Option>
                        <Select.Option value="react">React</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Статус" name="disabled" valuePropName="checked">
                    <Checkbox>В активном поиске</Checkbox>
                </Form.Item>
                <Form.Item label="Пол">
                    <Radio.Group>
                        <Radio value="male"> Мужчина </Radio>
                        <Radio value="female"> Женщина </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Birthday">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Почему ты с нами?">
                    <TextArea rows={15} />
                </Form.Item>
                <Form.Item className="flex flex-col gap-4 items-center">
                    <Button>Сохранить</Button>
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
