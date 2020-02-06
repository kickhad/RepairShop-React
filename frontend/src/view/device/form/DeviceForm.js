import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/device/deviceModel';
import React, { Component } from 'react';
import FormSchema from 'view/shared/form/formSchema';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  FormButtons,
} from 'view/shared/styles/FormWrapper';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'view/shared/form/items/TextAreaFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';

const { fields } = model;

class DeviceForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.printerBrand,
    fields.model,
    fields.serial,
    fields.orignalOrderNo,
    fields.purchaseDate,
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing, modal } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <InputFormItem
                  name={fields.printerBrand.name}
                  label={fields.printerBrand.label}
                  required={fields.printerBrand.required}
                  autoFocus
                />
                <TextAreaFormItem
                  name={fields.model.name}
                  label={fields.model.label}
                  required={fields.model.required}
                />
                <InputFormItem
                  name={fields.serial.name}
                  label={fields.serial.label}
                  required={fields.serial.required}
                />
                <InputFormItem
                  name={fields.orignalOrderNo.name}
                  label={fields.orignalOrderNo.label}
                  required={fields.orignalOrderNo.required}
                />
                <DatePickerFormItem
                  name={fields.purchaseDate.name}
                  label={fields.purchaseDate.label}
                  required={fields.purchaseDate.required}
                />

                <FormButtons
                  style={{
                    flexDirection: modal
                      ? 'row-reverse'
                      : undefined,
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={saveLoading}
                    type="button"
                    onClick={form.handleSubmit}
                    startIcon={<SaveIcon />}
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    type="button"
                    startIcon={<UndoIcon />}
                  >
                    {i18n('common.reset')}
                  </Button>

                  {this.props.onCancel ? (
                    <Button
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      type="button"
                      startIcon={<CloseIcon />}
                    >
                      {i18n('common.cancel')}
                    </Button>
                  ) : null}
                </FormButtons>
              </form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default DeviceForm;
