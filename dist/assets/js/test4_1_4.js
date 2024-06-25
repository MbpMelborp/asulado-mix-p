const per = `  
<form
  xmlns="http://www.w3.org/1999/xhtml"
  id="pg:fm"
  name="pg:fm"
  method="post"
  action="https://proteccion--stage--c.sandbox.vf.force.com/apex/NomiVoluntaria"
  enctype="application/x-www-form-urlencoded"
  onsubmit="return validateForm();"
>
  <input type="hidden" name="pg:fm" value="pg:fm" />

  <div class="apexp">
    <div
      id="pg:fm:pb"
      class="bPageBlock brandSecondaryBrd apexDefaultPageBlock secondaryPalette"
    >
      <script type="text/javascript">
        //<![CDATA[
        function twistSection(elem, sectionId) {
          var parentDiv = elem;
          var twisty = elem;
          while (parentDiv.tagName != "DIV") {
            parentDiv = parentDiv.parentNode;
          }
          if (
            elem.tagName === "DIV" &&
            elem.attributes["data-twistyimgid"] !== undefined
          ) {
            twisty = document.getElementById(
              elem.attributes["data-twistyimgid"].value
            );
          }
          var div = parentDiv.nextSibling;
          var elemWasOn = false;
          if (div.style.display != "none") {
            div.style.display = "none";
            twisty.className = "showListButton";
            twisty.alt = "Show Section - " + twisty.name;
            elem.title = twisty.alt;
            elemWasOn = true;
          } else {
            div.style.display = "block";
            twisty.className = "hideListButton";
            twisty.alt = "Hide Section - " + twisty.name;
            elem.title = twisty.alt;
          }
          return !elemWasOn;
        }
        var registeredSections = new Array();
        function registerTwistableSection(headerId, mainTableId) {
          var obj = new Object();
          obj.headerId = headerId;
          obj.mainTableId = mainTableId;
          registeredSections[registeredSections.length] = obj;
        }
        function twistAllSections(on) {
          for (var i = 0; i < registeredSections.length; i++) {
            var obj = registeredSections[i];
            var img;
            img = document.getElementById("img_" + obj.headerId);
            if (on && "showListButton" == img.className) {
              twistSection(img, obj.headerId, obj.mainTableId);
            } else if (!on && "hideListButton" == img.className) {
              twistSection(img, obj.headerId, obj.mainTableId);
            }
          }
        }
        function toggleSection(headerId, on) {
          var sectionHead = document.getElementById(
            "head_" + headerId + "_pg_fm_pb"
          );
          var body = sectionHead.nextSibling;
          var disp = on ? "block" : "none";
          sectionHead.style.display = disp;
          body.style.display = disp;
        }
        function registerTwistableSections_pg_fm_pb() {
          registerTwistableSection("pg_fm_pb_notpreview", "pg_fm_pb");
          registerTwistableSection("pg_fm_pb_notcapacity", "pg_fm_pb");
          registerTwistableSection("pg_fm_pb_motorFallido", "pg_fm_pb");
          registerTwistableSection("pg_fm_pb_preview", "pg_fm_pb");
          registerTwistableSection("pg_fm_pb_enProgreso", "pg_fm_pb");
          registerTwistableSection("pg_fm_pb_j_id19", "pg_fm_pb");
          registerTwistableSection("pg_fm_pb_voluntarias", "pg_fm_pb");
          registerTwistableSection("pg_fm_pb_j_id44", "pg_fm_pb");
          registerTwistableSection("pg_fm_pb_j_id46", "pg_fm_pb");
        }
        registerTwistableSections_pg_fm_pb();
        //]]>
      </script>
      <div class="pbBody">
        <div id="pg:fm:pb:voluntarias">
          <div class="pbSubsection">
            <table
              class="detailList"
              border="0"
              cellpadding="0"
              cellspacing="0"
            >
              <tbody>
                <tr>
                  <td class="data2Col first" colspan="2">
                    <p class="palert">
                      Diligencia todos los campos a continuación para actualizar
                      los datos de tu aporte voluntario.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="data2Col" colspan="2">
                    <input type="hidden" />
                  </td>
                </tr>
                <tr>
                  <th class="labelCol vfLabelColTextWrap" scope="row">
                    <label for="pg:fm:pb:voluntarias:descuento:tipoDescuento"
                      >Tipo de descuento</label
                    >
                  </th>
                  <td class="data2Col">
                    <select
                      id="pg:fm:pb:voluntarias:descuento:tipoDescuento"
                      name="pg:fm:pb:voluntarias:descuento:tipoDescuento"
                      size="1"
                      onchange="toggleCampos()"
                      onselect="toggleCampos()"
                    >
                      <option value="">Selecciona</option>
                      <option value="Valor">Valor</option>
                      <option value="Porcentaje">Porcentaje</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td class="data2Col" colspan="2">
                    <input type="hidden" />
                  </td>
                </tr>
                <tr>
                  <td class="data2Col" colspan="2">
                    <span
                      id="pg:fm:pb:voluntarias:aportes:porcentajeAportePanel"
                      style="display: none"
                      ><label
                        for="pg:fm:pb:voluntarias:aportes:porcentajeAporte"
                        >Porcentaje del aporte</label
                      ><input
                        id="pg:fm:pb:voluntarias:aportes:porcentajeAporte"
                        type="text"
                        name="pg:fm:pb:voluntarias:aportes:porcentajeAporte"
                        onkeypress="return soloNumeros(event);"
                    /></span>
                  </td>
                </tr>
                <tr>
                  <td class="data2Col" colspan="2">
                    <input type="hidden" />
                  </td>
                </tr>
                <tr>
                  <td class="data2Col" colspan="2">
                    <span
                      id="pg:fm:pb:voluntarias:valor:valorAportePanel"
                      style="display: none"
                      ><label for="pg:fm:pb:voluntarias:valor:valorAporte"
                        >Valor del aporte</label
                      ><input
                        id="pg:fm:pb:voluntarias:valor:valorAporte"
                        type="text"
                        name="pg:fm:pb:voluntarias:valor:valorAporte"
                        onkeypress="return soloNumeros(event);"
                    /></span>
                  </td>
                </tr>
                <tr>
                  <td class="data2Col" colspan="2">
                    <input type="hidden" />
                  </td>
                </tr>
                <tr>
                  <th class="labelCol vfLabelColTextWrap last" scope="row">
                    <label class="label"
                      ><span class="label-text"
                        >Meses de ahorro extraordinario</span
                      ></label
                    >
                  </th>
                  <td class="data2Col last form-control as_select">
                    <select
                      id="pg:fm:pb:voluntarias:j_id41:ahorroExtra"
                      name="pg:fm:pb:voluntarias:j_id41:ahorroExtra"
                      size="1"
                    >
                      <option value="Ninguno">Ninguno</option>
                      <option value="Noviembre" selected="selected">
                        Noviembre
                      </option>
                      <option value="Junio">Junio</option>
                      <option value="Noviembre y Junio">
                        Noviembre y Junio
                      </option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <input
          id="pg:fm:pb:disabledValue"
          type="hidden"
          name="pg:fm:pb:disabledValue"
          value="false"
        /><input
          id="pg:fm:pb:movimientoValue"
          type="hidden"
          name="pg:fm:pb:movimientoValue"
          value="Actualización"
        /><span id="pg:fm:pb:poller" style="display: none"
          ><span id="pg:fm:pb:j_id49"
            ><div id="pg:fm:pb:j_id50">
              <div class="pbSubsection">
                <table
                  class="detailList"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tbody>
                    <tr>
                      <td class="dataCol first last" colspan="2">
                        <span style="display: none" id="pg:fm:pb:j_id50:j_id51"
                          ><script type="text/javascript">
                            //<![CDATA[
                            A4J.AJAX.StopPoll("pg:fm:pb:j_id50:j_id51");
                            //]]>
                          </script></span
                        >
                      </td>
                      <td class="labelCol empty">&nbsp;</td>
                      <td class="dataCol empty">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div></span
          ></span
        >
      </div>
      <div class="pbBottomButtons">
        <table border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td class="pbTitle">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pbBottomButtons">
        <table border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td class="pbTitle">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pbBottomButtons">
        <table border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td class="pbTitle">&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pbFooter secondaryPalette"><div class="bg"></div></div>
    </div>
  </div>
  <div id="pg:fm:j_id70"></div>
</form>
<span
  xmlns="http://www.w3.org/1999/xhtml"
  id="ajax-view-state-page-container"
  style="display: none"
  ><span id="ajax-view-state" style="display: none"
    ><input
      type="hidden"
      id="com.salesforce.visualforce.ViewState"
      name="com.salesforce.visualforce.ViewState"
      value="i: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"
      autocomplete="off" /><input
      type="hidden"
      id="com.salesforce.visualforce.ViewStateVersion"
      name="com.salesforce.visualforce.ViewStateVersion"
      value="202406212351110825"
      autocomplete="off" /><input
      type="hidden"
      id="com.salesforce.visualforce.ViewStateMAC"
      name="com.salesforce.visualforce.ViewStateMAC"
      value="AGV5SnViMjVqWlNJNkluRlRjak5GTVd4VVpHcDJjVlpSYjJnd2NEVTBNQzFqZUhCWVZWaHZURlJaVEhOQ1VtRlBjVXAzTnpSY2RUQXdNMlFpTENKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUlzSW10cFpDSTZJbnRjSW5SY0lqcGNJakF3UkRBMU1EQXdNREF3T0hKRmExd2lMRndpZGx3aU9sd2lNREpIT0dFd01EQXdNREJJUjJSV1hDSXNYQ0poWENJNlhDSjJabk5wWjI1cGJtZHJaWGxjSWl4Y0luVmNJanBjSWpBd05VODRNREF3TURBeVVVeFZTbHdpZlNJc0ltTnlhWFFpT2xzaWFXRjBJbDBzSW1saGRDSTZNVGN4T1RNME56VTROamczTnl3aVpYaHdJam93ZlE9PS4uYzkwTGlmWVVWcGRHZDRONFh6NXU3alVTXzRITXFxc3RJbW92a0V6VUhGOD0="
      autocomplete="off" /><input
      type="hidden"
      id="com.salesforce.visualforce.ViewStateCSRF"
      name="com.salesforce.visualforce.ViewStateCSRF"
      value="VmpFPSxNakF5TkMwd05pMHlPRlF5TURvek16b3dOaTQ0TnpkYSxFUUQ0aF85SElkdmhtVmRGb3pMTlcxN0VoNDEyM0JnMVpQY0xkaXNUNHo0PSxZV1JqTnpSbQ=="
      autocomplete="off" /></span
></span>
<form
  xmlns="http://www.w3.org/1999/xhtml"
  id="pg:fm2"
  name="pg:fm2"
  method="post"
  action="https://proteccion--stage--c.sandbox.vf.force.com/apex/NomiVoluntaria"
  enctype="multipart/form-data"
  onsubmit="return validateForm();"
>
  <input type="hidden" name="pg:fm2" value="pg:fm2" />
  <div class="apexp">
    <div
      id="pg:fm2:pb2"
      class="bPageBlock brandSecondaryBrd apexDefaultPageBlock secondaryPalette"
    >
      <div class="pbBody">
        <div id="pg:fm2:pb2:archivos">
          <div class="pbSubsection">
            <table
              class="detailList"
              border="0"
              cellpadding="0"
              cellspacing="0"
            >
              <tbody>
                <tr>
                  <td class="data2Col first" colspan="2">
                    <h6>
                      Tenga en cuenta las siguientes consideraciones al momento
                      de subir archivos:
                    </h6>
                    <ul class="items">
                      <li>
                        <p>
                          Una carta comunicado la necesidad de actualizar los
                          valores del aporte o confirmando el retiro del mismo.
                        </p>
                      </li>
                      <li>
                        <p>
                          El peso maximo por archivo no debe superar el peso de
                          5MB.
                        </p>
                      </li>
                      <li>
                        <p>
                          Los unicos formatos permitidos son pdf, png, jpg,
                          jpeg.
                        </p>
                      </li>
                      <li>
                        <p>Unicamente se pueden adjuntar maximo 1 documento.</p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="data2Col" colspan="2">
                    <input type="hidden" />
                  </td>
                </tr>
                <tr>
                  <th class="labelCol vfLabelColTextWrap last" scope="row">
                    <input
                      accept="image/png,image/jpg,image/jpeg,application/pdf"
                      accesskey=""
                      alt=""
                      class=""
                      dir=""
                      id="pg:fm2:pb2:archivos:file:files"
                      lang=""
                      name="pg:fm2:pb2:archivos:file:files:inputFile:file"
                      onblur=""
                      onchange=""
                      onclick=""
                      ondblclick=""
                      onfocus=""
                      onkeydown=""
                      onkeypress=""
                      onkeyup=""
                      onmousedown=""
                      onmousemove=""
                      onmouseout=""
                      onmouseover=""
                      size=""
                      style=""
                      tabindex=""
                      title=""
                      type="file"
                    />
                  </th>
                  <td class="data2Col last form-control fc-file">
                    <span class="error-message" id="error-message"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="pbBottomButtons">
        <table border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td class="pbTitle">&nbsp;</td>
              <td id="pg:fm2:pb2:ps:bottom" class="pbButtonb">
                <input
                  id="pg:fm2:pb2:ps:btnvolver"
                  type="submit"
                  name="pg:fm2:pb2:ps:btnvolver"
                  value="Cancelar"
                  onclick="window.location.href = window.location.href;"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pbBottomButtons">
        <table border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td class="pbTitle">&nbsp;</td>
              <td id="pg:fm2:pb2:ps2:bottom" class="pbButtonb">
                <input
                  id="pg:fm2:pb2:ps2:btnVerify"
                  type="submit"
                  name="pg:fm2:pb2:ps2:btnVerify"
                  value="Enviar"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pbFooter secondaryPalette"><div class="bg"></div></div>
    </div>
  </div>
  <div id="pg:fm2:j_id71"></div>
</form> `;
setTimeout(() => {
  document.querySelectorAll(".pa_co_form")[0].innerHTML = per;
}, 1000);
