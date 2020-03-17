import { Button, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/repairOrder/repairOrderModel';
import React, { Component } from 'react';
import FormSchema from 'view/shared/form/formSchema';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  FormButtons,
} from 'view/shared/styles/FormWrapper';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import UserAutocompleteFormItem from 'view/iam/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from 'view/shared/form/items/SwitchFormItem';
import FilesFormItem from 'view/shared/form/items/FilesFormItem';
import CustomerAutocompleteFormItem from 'view/customer/autocomplete/CustomerAutocompleteFormItem';
import DeviceAutocompleteFormItem from 'view/device/autocomplete/DeviceAutocompleteFormItem';
import CommentsAutocompleteFormItem from 'view/comments/autocomplete/CommentsAutocompleteFormItem';
import ClaimsAutocompleteFormItem from 'view/claims/autocomplete/ClaimsAutocompleteFormItem';
import CommentsListTable from 'view/comments/list/CommentsListTable';
import CommentsListToolbar from 'view/comments/list/CommentsListToolbar';
import CommentsListToolbarRepairOrder from 'view/comments/list/CommentsListToolbarRepairOrder'
import Header from 'view/layout/Header';
const { fields } = model;
console.debug(fields);

class RepairOrderForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.customer,
    fields.products,
    fields.assignedTech,
    fields.delivered,
    fields.attachments,
    fields.comments,
    fields.warrantyClaim,
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

                <CustomerAutocompleteFormItem
                  name={fields.customer.name}
                  label={fields.customer.label}
                  required={fields.customer.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
                <DeviceAutocompleteFormItem
                  name={fields.products.name}
                  label={fields.products.label}
                  required={fields.products.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                />
                <UserAutocompleteFormItem
                  name={fields.assignedTech.name}
                  label={fields.assignedTech.label}
                  required={fields.assignedTech.required}
                  showCreate={!this.props.modal}
                  form={form}
                />
    
                {/* <FilesFormItem
                  name={fields.attachments.name}
                  label={fields.attachments.label}
                  required={fields.attachments.required}
                  path={fields.attachments.path}
                  schema={{
                    size: fields.attachments.size,
                    formats: fields.attachments.formats,
                  }}
                  max={fields.attachments.max}
                /> */}
                  
                
                  <CommentsListToolbarRepairOrder></CommentsListToolbarRepairOrder>
                  <CommentsListTable
                  >

                  </CommentsListTable>
                {/* <CommentsAutocompleteFormItem
                  name={fields.comments.name}
                  label={fields.comments.label}
                  required={fields.comments.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                /> */}
                <ClaimsAutocompleteFormItem
                  name={fields.warrantyClaim.name}
                  label={fields.warrantyClaim.label}
                  required={fields.warrantyClaim.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                />
            <SwitchFormItem
                  name={fields.delivered.name}
                  label={fields.delivered.label}
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

export default RepairOrderForm;
