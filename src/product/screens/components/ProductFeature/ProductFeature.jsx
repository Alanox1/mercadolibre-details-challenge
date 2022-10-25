import React from "react";
import {Text, Stack} from "@chakra-ui/react";

import product from "../../../mock";

import styles from "./ProductFeature.css";
const ProductFeature = () => {
  const mainFeatures = product.attributes.slice(1, 6);
  const otherFeatures = product.attributes.slice(7, 12);

  const mainFeatureElements = mainFeatures.map((feature) => (
    <tr key={feature.id}>
      <th className="feature-title">{feature.name}</th>
      <td className="feature-value">{feature.value_name}</td>
    </tr>
  ));
  const otherFeatureElements = otherFeatures.map((feature) => (
    <p key={feature.id}>
      <b>{feature.name}: </b>
      {feature.value_name}
    </p>
  ));

  return (
    <Stack padding="35px">
      <Text fontSize={25}>Características principales</Text>

      <table className="features-table">
        <tbody>{mainFeatureElements}</tbody>
      </table>

      <div className="other-features-container">
        <h3>Otras caracter&iacute;sticas</h3>

        <div className="other-features">{otherFeatureElements}</div>
      </div>
    </Stack>
  );
};

export default ProductFeature;
