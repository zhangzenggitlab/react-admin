import "./index.scss";
import {
  Form,
  Input,
  Select,
  Button,
  DatePicker,
  Space,
  TreeSelect,
  Col,
  Row,
  InputNumber,
} from "antd";
import { IAtForm, IAtFormItem } from "@/interfaces/IAtForm";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const AtForm = forwardRef((props: IAtForm, ref: any) => {
  {
    const { RangePicker } = DatePicker;
    const formRef = useRef<any>(null);
    const mapItems = () => {
      return props.formItems.map((item: IAtFormItem) => {
        const type = item.type;
        switch (type) {
          case "":
          case "text":
            return (
              <Col key={item.name} span={item.colSpan ? item.colSpan : 6}>
                <Form.Item
                  name={item.name}
                  label={item.label}
                  rules={item.rules}
                  key={item.name}
                  style={props.style ? props.style : item.style}
                  wrapperCol={item.wrapperCol}
                >
                  {
                    <Input
                      placeholder={item.placeholder}
                      disabled={item.disabled}
                      allowClear={true}
                    />
                  }
                </Form.Item>
              </Col>
            );

          case "select":
            return (
              <Col key={item.name} span={item.colSpan ? item.colSpan : 6}>
                <Form.Item
                  name={item.name}
                  label={item.label}
                  rules={item.rules}
                  key={item.name}
                  style={props.style ? props.style : item.style}
                  wrapperCol={item.wrapperCol}
                >
                  {
                    <Select
                      options={item.options}
                      placeholder={item.placeholder}
                      disabled={item.disabled}
                    />
                  }
                </Form.Item>
              </Col>
            );

          case "datePicker":
            return (
              <Col key={item.name} span={item.colSpan ? item.colSpan : 6}>
                <Form.Item
                  name={item.name}
                  label={item.label}
                  rules={item.rules}
                  key={item.name}
                  style={props.style ? props.style : item.style}
                  wrapperCol={item.wrapperCol}
                >
                  <DatePicker
                    format={item.format}
                    onChange={item.onChange}
                    picker={item.picker}
                    showTime={item.showTime}
                  />
                </Form.Item>
              </Col>
            );

          case "RangePicker":
            return (
              <Col key={item.name} span={item.colSpan ? item.colSpan : 6}>
                <Form.Item
                  name={item.name}
                  label={item.label}
                  rules={item.rules}
                  key={item.name}
                  style={props.style ? props.style : item.style}
                  wrapperCol={item.wrapperCol}
                >
                  <RangePicker
                    format={item.format}
                    onChange={item.onChange}
                    picker={item.picker}
                    showTime={item.showTime}
                  />
                </Form.Item>
              </Col>
            );

          case "treeSelect":
            return (
              <Col key={item.name} span={item.colSpan ? item.colSpan : 6}>
                <Form.Item
                  name={item.name}
                  label={item.label}
                  rules={item.rules}
                  key={item.name}
                  style={props.style ? props.style : item.style}
                  wrapperCol={item.wrapperCol}
                >
                  <TreeSelect
                    treeData={item.treeData ? item.treeData : props.treeData}
                    multiple={item.multiple}
                    fieldNames={item.fieldNames}
                    disabled={item.disabled}
                  ></TreeSelect>
                </Form.Item>
              </Col>
            );

          case "inputNumber":
            return (
              <Col key={item.name} span={item.colSpan ? item.colSpan : 6}>
                <Form.Item
                  name={item.name}
                  label={item.label}
                  rules={item.rules}
                  key={item.name}
                  style={props.style ? props.style : item.style}
                  wrapperCol={item.wrapperCol}
                >
             
                  <InputNumber
                    onChange={item.onChange}
                    min={item.min}
                    max={item.max}
                  />
                </Form.Item>
              </Col>
            );
        }
      });
    };

    // 底部渲染,传false则隐藏，否则就显示默认按钮
    const showFooter = (): any => {
      if (props.footer === false) {
        return;
      }

      if (props.footer) {
        return <Form.Item>{props.footer}</Form.Item>;
      }

      return (
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
            <Button
              onClick={() => {
                props.form.resetFields();
              }}
            >
              重置
            </Button>
          </Space>
        </Form.Item>
      );
    };

    useImperativeHandle(ref, () => {
      return {
        getFormValue() {
          if (formRef.current) {
            return formRef.current.getFieldsValue();
          }
          return;
        },
        setFieldsValue(values: any) {
          if (formRef.current) {
            return formRef.current.setFieldsValue(values);
          }
          return;
        },
        resetFields() {
          if (formRef.current) {
            return formRef.current.resetFields();
          }
          return;
        },
        validateFields() {
          if (formRef.current) {
            return formRef.current.validateFields();
          }
          return;
        },
      };
    });

    return (
      <Row>
        <Form
          ref={formRef}
          layout={props.layout}
          wrapperCol={props.wrapperCol}
          labelCol={props.labelCol}
          initialValues={props.initialValues}
          form={props.form}
          name="control-hooks"
          onFinish={props.onFinish}
          onFinishFailed={props.onFinishFailed}
          style={props.style}
          className="at-form"
          autoComplete={props.autoComplete}
        >
          {mapItems()}
          {showFooter()}
        </Form>
      </Row>
    );
  }
});

export default AtForm;
