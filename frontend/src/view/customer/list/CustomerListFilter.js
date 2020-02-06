import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/customer/list/customerListActions';
import selectors from 'modules/customer/list/customerListSelectors';
import model from 'modules/customer/customerModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormFilterSchema from 'view/shared/form/formFilterSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'view/shared/form/items/DatePickerRangeFormItem';
import FilterWrapper, {
  FilterButtons,
} from 'view/shared/styles/FilterWrapper';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import { Button, Grid } from '@material-ui/core';


const { fields } = model;

const schema = new FormFilterSchema([
  fields.name,
  fields.email,
  fields.city,
  fields.province,
  fields.country,
  fields.address0,
]);

class CustomerListFilter extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.doFetch(this.initialFilter()));
  }

  initialFilter = () => {
    return schema.initialValues(
      this.props.filter,
      this.props.location,
    );
  };

  handleSubmit = (values) => {
    const valuesToSubmit = schema.cast(values);
    const { dispatch } = this.props;
    dispatch(actions.doFetch(valuesToSubmit));
  };

  handleReset = (form) => {
    form.setValues({});
    const { dispatch } = this.props;
    dispatch(actions.doReset());
  };

  render() {
    const { loading } = this.props;

    return (
      <FilterWrapper>
        <Formik
          initialValues={this.initialFilter()}
          validationSchema={schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <form onSubmit={form.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.name.name}
                      label={fields.name.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.email.name}
                      label={fields.email.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.city.name}
                      label={fields.city.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.province.name}
                      label={fields.province.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.country.name}
                      label={fields.country.label}
                    />
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <InputFormItem
                      name={fields.address0.name}
                      label={fields.address0.label}
                    />
                  </Grid>
                </Grid>

                <FilterButtons>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={loading}
                    startIcon={<SearchIcon />}
                  >
                    {i18n('common.search')}
                  </Button>

                  <Button
                    type="button"
                    onClick={() => this.handleReset(form)}
                    disabled={loading}
                    startIcon={<UndoIcon />}
                  >
                    {i18n('common.reset')}
                  </Button>
                </FilterButtons>
              </form>
            );
          }}
        />
      </FilterWrapper>
    );
  }
}

function select(state) {
  return {
    filter: selectors.selectFilter(state),
  };
}

export default withRouter(connect(select)(CustomerListFilter));
