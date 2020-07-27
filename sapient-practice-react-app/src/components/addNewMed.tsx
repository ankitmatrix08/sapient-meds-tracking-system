import * as React from "react";
import { Component } from "react";
import { withFormik } from "formik";

export interface AddNewMedProps {
  values: any;
  handleSubmit: any;
  formtype?: string;
  porpertyDetails: any;
  handleChange: any;
  handleBlur: any;
}

export interface AddNewMedState {}

export class AddNewMed extends React.Component<AddNewMedProps, AddNewMedState> {
  render() {
    const {
      values,
      handleSubmit,
      formtype,
      handleChange,
      handleBlur,
    } = this.props;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <React.Fragment>
                  <div className="col-md-12 CaptionUserFld" id="AddUserCode">
                    <div className="form-group">
                      <label>Full Name</label>
                      <div className="input-group">
                        <input
                          value={values.fullName}
                          id="fullName"
                          type="text"
                          className="form-control"
                          onChange={(e) => {
                            if (
                              new RegExp(/^(?:\d*\.\d{1,2}|\d+)$/).test(
                                e.target.value
                              )
                            ) {
                              handleChange(e);
                            }
                          }}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 CaptionUserFld" id="AddUserCode">
                    <div className="form-group">
                      <label>Brand</label>
                      <div className="input-group">
                        <input
                          id="brand"
                          type="text"
                          value={values.brand}
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </React.Fragment>
                <div className="col-md-12 CaptionUserFld" id="AddUserCode">
                  <div className="form-group">
                    <label>Price</label>
                    <div className="input-group">
                      <input
                        id="price"
                        type="text"
                        value={Number(values.price).toFixed(2)}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-12 CaptionUserFld" id="AddUserCode">
                  <div className="form-group">
                    <label>Quantity</label>
                    <div className="input-group">
                      <input
                        id="qty"
                        type="text"
                        maxLength={3}
                        value={Number(values.qty)}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 CaptionUserFld" id="AddUserCode">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <div className="input-group">
                      <input
                        id="expDate"
                        type="text"
                        value={values.expDate}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const enhancer = withFormik({
  mapPropsToValues: (props: any) => ({
    fullName: props.fullName ? props.fullName : "",
    brand: props.brand ? props.brand : "",
    price: props.price ? props.price : "",
    qty: props.qty ? props.qty : "",
    expDate: props.expDate ? props.expDate : "",
  }),

  handleSubmit: (
    values: any,
    { props, setErrors, setSubmitting, resetForm }
  ) => {
    setErrors({ loading: "true" });

    let insertdata = JSON.stringify({
      fullName: values.fullName,
      brand: values.brand,
      price: values.price,
      qty: values.qty,
      expDate: values.expDate,
    });

    let Updatedata = JSON.stringify({
      fullName: values.fullName,
      brand: values.brand,
      price: values.price,
      qty: values.qty,
      expDate: values.expDate,
      medId: props.medId,
    });

    let data;
    if (props.formtype) {
      data = Updatedata;
    } else {
      data = insertdata;
    }
    props
      .SendData(data)
      .then((responce: any) => {
        setSubmitting(false);
        resetForm();
        setErrors({ successMsg: responce, loading: "false" });
      })
      .catch((error: any) => {
        setSubmitting(false);
        setErrors({ errorMsg: error.message, loading: "false" });
      });
  },
  displayName: "AddProperty",
});

export const EnhancedForm = enhancer(AddNewMed);

export const AddNewMedForm = (props: any) => <EnhancedForm {...props} />;
