/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2017, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define(
    [],
    function () {

        /**
         * The mct-control will dynamically include the control
         * for a form element based on a symbolic key. Individual
         * controls are defined under the extension category
         * `controls`; this allows plug-ins to introduce new form
         * control types while still making use of the form
         * generator to ensure an overall consistent form style.
         * @constructor
         * @memberof platform/forms
         */
        function AutocompleteDirective($timeout) {
            return function(scope, iElement, iAttrs) {
                console.log("scope", scope);
                console.log("iElement", iElement);
                console.log("iAttrs", iAttrs);
                // iElement.autocomplete({
                //     source: scope[iAttrs.uiItems],
                //     select: function() {
                //         $timeout(function() {
                //             iElement.trigger('input');
                //         }, 0);
                //     }
                // });
            };
        }

        return AutocompleteDirective;
    }
);
