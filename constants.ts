import { Admin, Attribute, AttributeFormatEnum, AttributeTypeEnum, User } from "@/grapqhl"

export const AttributeTypeMap = new Map([
  [
    AttributeTypeEnum.String,
    {
      value: AttributeTypeEnum.String,
      text: "Texto",
    },
  ],
  [
    AttributeTypeEnum.Numeric,
    {
      value: AttributeTypeEnum.Numeric,
      text: "Numérico",
    },
  ],
  [
    AttributeTypeEnum.Boolean,
    {
      value: AttributeTypeEnum.Boolean,
      text: "Sí/No",
    },
  ],
])

export const AttributeFormatMap = new Map([
  [
    AttributeFormatEnum.String,
    {
      value: AttributeFormatEnum.String,
      text: "Texto",
    },
  ],
  [
    AttributeFormatEnum.Area,
    {
      value: AttributeFormatEnum.Area,
      text: "Área",
    },
  ],
  [
    AttributeFormatEnum.Price,
    {
      value: AttributeFormatEnum.Price,
      text: "Precio",
    },
  ],
  [
    AttributeFormatEnum.Url,
    {
      value: AttributeFormatEnum.Url,
      text: "Enlace",
    },
  ],
])

export const AttributeFormatByTypeMap: Map<AttributeTypeEnum, Array<object>> = new Map([
  [
    AttributeTypeEnum.String,
    [
      {
        value: AttributeFormatEnum.String,
        text: "Texto",
      },
      {
        value: AttributeFormatEnum.Url,
        text: "Enlace",
      },
    ],
  ],
  [
    AttributeTypeEnum.Numeric,
    [
      {
        value: AttributeFormatEnum.String,
        text: "Texto",
      },
      {
        value: AttributeFormatEnum.Area,
        text: "Área",
      },
      {
        value: AttributeFormatEnum.Price,
        text: "Precio",
      },
    ],
  ],
  [
    AttributeTypeEnum.Boolean,
    [
      {
        value: AttributeFormatEnum.String,
        text: "Texto",
      },
    ],
  ],
])

export const OrderTerrains = [
  {
    value: "name",
    title: "Nombre",
  },
  {
    value: "status",
    title: "Estado",
  },
]

export const StatusMap = new Map([
  [true, { name: "Activo", value: true }],
  [false, { name: "Inactivo", value: false }],
])

export const RootMap = new Map([
  [true, { name: "Administrador Total", value: true }],
  [false, { name: "Administrador", value: false }],
])

export const RequiredMap = new Map([
  [true, { name: "Requerido", value: true }],
  [false, { name: "Opcional", value: false }],
])

export const deleteUserTitle = "Eliminar Usuario"
export const deleteUserBody = (user: User): string =>
  `¿Desea eliminar al usuario ${user.firstName} ${user.lastName}? Al realizar esta acción se eliminaran todos los usuarios, archivos y terrenos pertenecientes a este usuario. ¿Desea continuar?`
export const activateUserTitle = "Activar Usuario"
export const activateUserBody = (user: User): string =>
  `¿Desea activar al usuario ${user.firstName} ${user.lastName}? Al realizar esta acción se otorgará acceso a la plataforma al usuario y sus subusuarios. ¿Desea continuar?`
export const deactivateUserTitle = "Desactivar Usuario"
export const deactivateUserBody = (user: User): string =>
  `¿Desea desactivar al usuario ${user.firstName} ${user.lastName}? Al realizar esta acción se restringirá el acceso a la plataforma al usuario y sus subusuarios. ¿Desea continuar?`

export const deleteAttributeTitle = "Eliminar Atributo"
export const deleteAttributeBody = (attribute: Attribute): string =>
  `¿Desea eliminar el atributo ${attribute.name}? Al realizar esta acción se eliminaran todos los datos relacionados con este atributo en todos los terrenos. ¿Desea continuar?`
export const activateAdminTitle = "Activar Administrador"
export const activateAdminBody = (admin: Admin): string =>
  `¿Desea activar al administrador ${admin.firstName} ${admin.lastName}? Al realizar esta acción se otorgará acceso al panel administrativo y sus usuarios tendrán acceso al panel principal. ¿Desea continuar?`
export const deactivateAdminTitle = "Desactivar Administrador"
export const deactivateAdminBody = (admin: Admin): string =>
  `¿Desea desactivar al administrador ${admin.firstName} ${admin.lastName}? Al realizar esta acción se restringirá el acceso al panel administrativo y sus usuarios no tendrán acceso al panel principal. ¿Desea continuar?`

export const deleteAdminTitle = "Eliminar Administrador"
export const deleteAdminBody = (admin: Admin): string =>
  `¿Desea eliminar al administrador ${admin.firstName} ${admin.lastName}? Al realizar esta acción se eliminarán los datos del administrador y todos los usuarios pertenecientes a este quedan desvinculados totalmente. ¿Desea continuar?`

export const titleRefreshSheet = "Refrescar datos de integración"
export const bodyRefreshSheet =
  "¿Desea refrescar la integración establecidad? Al realizar esta acción se actualizará toda la información de terrenos, atributos y etiquetas. Esto puede demorar varios segundos."

export const titleRefreshSheetGeometry = "Refrescar datos y geometrías de integración"
export const bodyRefreshSheetGeometry =
  "¿Desea refrescar la integración establecidad? Al realizar esta acción se actualizará toda la información de terrenos, atributos, etiquetas y geometrías. Esto puede demorar varios segundos."

export const titleUnbindSheet = "Desvincular datos de integración"
export const bodyUnbindSheet =
  "¿Desea desvincular la integración establecidad? Al realizar esta acción quedará almacenada toda la información de terrenos, atributos y etiquetas pertenecientes a la integración y se eliminarán todas las configuración establecidas."

export const titleDeleteSheet = "Eliminar datos de integración"
export const bodyDeleteSheet =
  "¿Desea eliminar la integración establecidad con toda la información generada? Al realizar esta acción se eliminará toda la información de terrenos, atributos, etiquetas pertenecientes a la integración, al igual que las configuraciones establecidas. "

export const sheetAttributeTitle = "Eliminar asignación de atributo"
export const deleteSheetAttributeBody = (attribute: string) => `¿Desea eliminar la asignación del atributo ${attribute}?`

export const sheetTagDeleteTitle = "Eliminar asignación de etiqueta"
export const SheetTagDeleteBody = (tag: string) => `¿Desea eliminar la asignación de etiquetas en la columna ${tag}?`

export const titleRefreshPrivilege = "Refrescar privilegios de usuarios"
export const bodyRefreshPrivilege =
  "¿Desea refrescar los privilegios de usuarios? Al realizar esta acción, se actualizarán los privilegios de los subusuarios en los terrenos automáticamente basadas en las coincidencias de etiquetas de terrenos y etiquetas de usuarios. Es decir, si las etiquetas de un usuario coinciden con las etiquetas de un terreno, el subusuario obtendrá automáticamente los privilegios asociados a esa etiqueta. ¿Desea continuar? "
