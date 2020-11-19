import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getComponent,
  addComponent,
  updateComponent,
} from "../../actions/merchandises";
import ComponentForm from "../../common/componentForm";

function InfoForm(props) {
  InfoForm.propTypes = {
    componentObject: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    addComponent: PropTypes.func.isRequired,
    updateComponent: PropTypes.func.isRequired,
  };

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [frequency, setFrequency] = useState("");
  const [cache, setCache] = useState("");
  const [cores, setCores] = useState("");
  const [memory, setMemory] = useState("");
  const [capacity, setCapacity] = useState("");
  const [image, setImage] = useState();

  const componentVariant = props.match.params.component;
  const componentId = props.match.params.id;
  const { componentObject } = props;
  const currentComponent =
    componentObject[componentVariant.toUpperCase()] || componentObject[""];
  let newComponent = {};

  useEffect(() => {
    const componentVariant = props.match.params.component;
    if (props.match.url !== `/${componentVariant}/form/new`) {
      props.getComponent(componentId, componentVariant);
    }
    // setName(currentComponent?.name);
    // setPrice(currentComponent?.price);
    // setFrequency(currentComponent?.frequency);
    // setCache(currentComponent?.cache);
    // setCores(currentComponent?.cores);
    // setMemory(currentComponent?.memory);
    // setCapacity(currentComponent?.capacity);
    // setImage(currentComponent?.image);
  }, [props.match.url]);

  function handleSubmit(e, componentType) {
    e.preventDefault();
    if (props.match.url === `/${componentType}/form/new`) {
      newComponent.name = name;
      newComponent.price = price;
      newComponent.frequency = frequency;
      newComponent.cache = cache;
      newComponent.cores = cores;
      newComponent.memory = memory;
      newComponent.capacity = capacity;
      newComponent.image = image;
      //
      const postedComponent = new FormData();
      postedComponent.append("name", name);
      postedComponent.append("price", price);
      postedComponent.append("capacity", capacity);
      postedComponent.append("frequency", frequency);
      postedComponent.append("cache", cache);
      postedComponent.append("cores", cores);
      postedComponent.append("memory", memory);
      postedComponent.append("image", image, image?.name);

      props.addComponent(postedComponent, componentVariant);
      props.history.push(`/admin-space/components/${componentVariant}/`);
    } else {
      currentComponent.name = name;
      currentComponent.price = price;
      currentComponent.frequency = frequency;
      currentComponent.cache = cache;
      currentComponent.cores = cores;
      currentComponent.memory = memory;
      currentComponent.capacity = capacity;
      currentComponent.image = image;
      //
      const updatedComponent = new FormData();
      updatedComponent.append("name", name);
      updatedComponent.append("price", price);
      updatedComponent.append("capacity", capacity);
      updatedComponent.append("frequency", frequency);
      updatedComponent.append("cache", cache);
      updatedComponent.append("cores", cores);
      updatedComponent.append("memory", memory);
      updatedComponent.append("image", image);

      console.log(name, price);

      props.updateComponent(updatedComponent, componentVariant, componentId);
      props.history.push(`/admin-space/components/${componentVariant}/`);
    }
  }

  function handleChange(e) {
    if (e.target.name === "name") {
      setName(e.currentTarget.value);
    }
    if (e.target.name === "price") {
      setPrice(e.currentTarget.value);
    }
    if (e.target.name === "frequency") {
      setFrequency(e.currentTarget.value);
    }
    if (e.target.name === "cache") {
      setCache(e.currentTarget.value);
    }
    if (e.target.name === "cores") {
      setCores(e.currentTarget.value);
    }
    if (e.target.name === "memory") {
      setMemory(e.currentTarget.value);
    }
    if (e.target.name === "capacity") {
      setCapacity(e.currentTarget.value);
    }
    if (e.target.name === "image") {
      setImage(e.target.files[0]);
    }
  }

  return (
    <div>
      <ComponentForm
        componentType={componentVariant}
        componentObject={currentComponent}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        url={props.match.url}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  componentObject: state.merchandises.merchandise,
});

export default connect(mapStateToProps, {
  getComponent,
  addComponent,
  updateComponent,
})(InfoForm);
