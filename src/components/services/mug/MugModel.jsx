import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MugModel(props) {
  const { nodes, materials } = useGLTF('/mugModel.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1.84, 0, 0]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh geometry={nodes.pjKmpIkIWwGoMTR_1.geometry} material={materials.wwdjrsOZDspvrxe_001} />
            <mesh geometry={nodes.iwqxlumJneXOPnd_001_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.XYHxguqWIEOZSMk_001_1.geometry} material={materials.cvFUDQejBDPZzLM_001} />
            <mesh geometry={nodes.ZedfQxZdRpOIImb_1.geometry} material={materials.ArjOFmDNzaBSwZD} />
            <mesh geometry={nodes.sBzfdKXBPRaYsBW_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.ggaDPRXEUrZtnMJ_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.HrUCnoAkFjmOCiW_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.iUcVghiCpHcUeSo_001_1.geometry} material={materials.QTvfOoaLyvBzead_001} />
            <mesh geometry={nodes.dahyJJRHSPwQriP_001_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.MbZGmmdTECGPIuF_001_1.geometry} material={materials.dqgGFgdihIeiZlf_001} />
            <mesh geometry={nodes.aFyxhronXZWYaJb_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.fXmkWSdxFIIbExl_001_1.geometry} material={materials.DdWdzDpAESzZMHT_001} />
            <mesh geometry={nodes.wdFtmsFnhzBBYYb_001_1.geometry} material={materials.dHtJfOcLXHFjmwv_001} />
            <mesh geometry={nodes.JBCCrcdplZxGMIi_1.geometry} material={materials.PYYcHKdPqkBfILp} />
            <mesh geometry={nodes.UVJpfmUHEHBRvoq_001_1.geometry} material={materials.DdWdzDpAESzZMHT_001} />
            <mesh geometry={nodes.SUGmtDtLfGpwTKQ_1.geometry} material={materials.ArjOFmDNzaBSwZD} />
            <mesh geometry={nodes.yJqQlXRVBEihefr_001_1.geometry} material={materials.MXxDtuFlfXWRstO_001} />
            <mesh geometry={nodes.AHfIyhpEzRRqqSp_001_1.geometry} material={materials.DdWdzDpAESzZMHT_001} />
            <mesh geometry={nodes.JvYwENjqsfyEeTn_001_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.NMlbNIJUxaLrafG_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.yUJrspAQqGGDqUJ_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.qdMFkRQCSAGKWmW_001_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.wNpxyfCnJoGpmKG_001_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.CmoOkdmtECGtrqa_001_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.ctGIMRuXgPcUwMB_001_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.prsqwsyiGuZYhcD_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.GceTjEscIizUaHn_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.TWobYsGmWmxQNCo_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.xMkwmsnvSpynynK_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.UzRnxegmZKiVbxz_001_1.geometry} material={materials.ULzYbZyAYANatvA_001} />
            <mesh geometry={nodes.QDmAnbphbVrDStm_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.dHZxmqWAYRtedsv_1.geometry} material={materials.RbixOJvwPDAnJgY} />
            <mesh geometry={nodes.NYHwWgdzqRVtGls_001_1.geometry} material={materials.qZbsRZuUcnmHqVA_001} />
            <mesh geometry={nodes.rrGAagMNZYVDwQi_001_1.geometry} material={materials.wwdjrsOZDspvrxe_001} />
            <mesh geometry={nodes.ideKLAcgKClGbWh_001_1.geometry} material={materials.bJIKWwdITHomtLh} />
            <mesh geometry={nodes.ZoRDfWJscXqrAqZ_1.geometry} material={materials.bJIKWwdITHomtLh} />
            <mesh geometry={nodes.zWYfPRrQSZbGsvc_1.geometry} material={materials.bJIKWwdITHomtLh} />
            <mesh geometry={nodes.pzVCiHXRdkTLCum_001_1.geometry} material={materials.nOprJNpxgRbEBQG_001} />
            <mesh geometry={nodes.YmhMoBnUphoNoKv_1.geometry} material={materials.ArjOFmDNzaBSwZD} />
            <mesh geometry={nodes.esWarYgrvBGzmbE_1.geometry} material={materials.bJIKWwdITHomtLh} />
            <mesh geometry={nodes.BgvnmoJLyPShVhG_1.geometry} material={materials.bJIKWwdITHomtLh} />
            <mesh geometry={nodes.JOMpJqoQUFWuHBT_001_1.geometry} material={materials.nOprJNpxgRbEBQG_001} />
            <mesh geometry={nodes.LkHKSjnEUFxYwXw_001_1.geometry} material={materials.wwdjrsOZDspvrxe_001} />
            <mesh geometry={nodes.SUWgJxEFmKbBPDM_1.geometry} material={materials.ArjOFmDNzaBSwZD} />
            <mesh geometry={nodes.OZxXcyTnSBSoKir_1.geometry} material={materials.jBfdsjOkFMShqLU_001} position={[0.005, 0.006, 0.04]} />
            <mesh geometry={nodes.nRXIMSRADiAqPXV_001_1.geometry} material={materials.guTcKQwdaToGoMi_001} />
            <mesh geometry={nodes.OSKJECezTaTbKQn_001_1.geometry} material={materials.RmyubFjMaxDJSTu_001} position={[0.013, 0.051, 0.111]} />
            <mesh geometry={nodes.OzPbIdboiAhJquq_001_1.geometry} material={materials.IlxFfYKNNssxlBm_001} />
            <mesh geometry={nodes.ZDMITXZOWaocZDl_001_1.geometry} material={materials.pMTAaHJdVwYXgSm} />
            <mesh geometry={nodes.iOHQcTDOymCOLPa_001_1.geometry} material={materials.jBfdsjOkFMShqLU_001} />
            <mesh geometry={nodes.UQIMhxTpQcAnKuE_001_1.geometry} material={materials.svYpOgFATPfCAOS_001} />
            <mesh geometry={nodes.SRsTivCExqZrrbq_1.geometry} material={materials.WUYxwatEaLwQKYC} />
            <mesh geometry={nodes.iPfHEISlCOUFUJg_1.geometry} material={materials.QqdCrHxuCzexUxf} />
            <mesh geometry={nodes.TrIgPgYjrZtOpQb_1.geometry} material={materials.sToDXxNwueZqWZI} />
            <mesh geometry={nodes.JzhySJEMOyYkpAi_1.geometry} material={materials.mXkFzozcTXfLyuQ} />
            <mesh geometry={nodes.GEcXUpfxsAYittk_1.geometry} material={materials.IEoaprUFYjrYQuo} />
            <mesh geometry={nodes.UaOiZpDUfwHxeaQ_001_1.geometry} material={materials.YcBrFYNBSNyfVIw} />
            <mesh geometry={nodes.ydsBJrhlcCUADPN_001_1.geometry} material={materials.ArjOFmDNzaBSwZD} />
            <mesh geometry={nodes.VLVVWSIPgVbZzxD_1.geometry} material={materials.DFBuKSsxxpOpRhd} />
            <mesh geometry={nodes.tdiLfdzHiuobnpo_001_1.geometry} material={materials.ktEzOOCQuuMSdnN} />
            <mesh geometry={nodes.QIicyxRdrPBydBr_1.geometry} material={materials.rlvJaAxZokQwvfU} />
            <mesh geometry={nodes.XFrqhnYKJUuMkGl_1.geometry} material={materials.DFBuKSsxxpOpRhd} />
            <mesh geometry={nodes.EZzxgQClQXKMNAf_1.geometry} material={materials.pMTAaHJdVwYXgSm} />
            <mesh geometry={nodes.dTjiiVQKdYrGkcg_1.geometry} material={materials.ArjOFmDNzaBSwZD} />
            <mesh geometry={nodes.BwfabJNuRYQYacT_1.geometry} material={materials.IEoaprUFYjrYQuo} />
            <mesh geometry={nodes.cXyICSOuYkyihwo_1.geometry} material={materials.DFBuKSsxxpOpRhd} />
            <mesh geometry={nodes.JYuJFZCKMgeZoSX_1.geometry} material={materials.DFBuKSsxxpOpRhd} />
            <mesh geometry={nodes.oWwaYqldPzAqzRJ_1.geometry} material={materials.YcBrFYNBSNyfVIw} />
            <mesh geometry={nodes.FHJLLchJruDGCGX_001_1.geometry} material={materials.DFBuKSsxxpOpRhd} />
            <mesh geometry={nodes.wEfLGhcGzIxDNqQ_001_1.geometry} material={materials.IEoaprUFYjrYQuo} />
            <mesh geometry={nodes.uKUzzChrccSZZbt_001_1.geometry} material={materials.ArjOFmDNzaBSwZD} />
            <mesh geometry={nodes.ZEwdBnlEHnzzfDL_001_1.geometry} material={materials.IEoaprUFYjrYQuo} />
            <mesh geometry={nodes.xTfhDjoWRFLGVsJ_001_1.geometry} material={materials.mXkFzozcTXfLyuQ} />
            <mesh geometry={nodes.UtsUrTfHEiJiCAA_1.geometry} material={materials.rlvJaAxZokQwvfU} />
            <mesh geometry={nodes.WuoANQxRNpQKxIO_1.geometry} material={materials.pMTAaHJdVwYXgSm} />
            <mesh geometry={nodes.YlihWJAdkrRRDCI_1.geometry} material={materials.DFBuKSsxxpOpRhd} />
            <mesh geometry={nodes.dgKFlJKUbReObhm_1.geometry} material={materials.ArjOFmDNzaBSwZD} />
            <mesh geometry={nodes.MeYAAjZeBuLIQDS_1.geometry} material={materials.ktEzOOCQuuMSdnN} />
            <mesh geometry={nodes.PydXoRqUmLFEFbQ_1.geometry} material={materials.mQWbDVjQbFZoLKn} />
            <mesh geometry={nodes.SuAGFzxOiUqogKS_001_1.geometry} material={materials.QbwGXzyOZwgriGL_001} />
            <mesh geometry={nodes.tMZJGrrUNDSXcPt_1.geometry} material={materials.ArjOFmDNzaBSwZD} />
            <mesh geometry={nodes.dEHKBnSxNkNCatR_001_1.geometry} material={materials.FsqNMRNvIFvfMyT_001} />
            <mesh geometry={nodes.koOgGyciFaLfQWi_1.geometry} material={materials.ztwMzxZRyfuDAka} />
            <mesh geometry={nodes.kBkfargmEXoWskh_001_1.geometry} material={materials.RmyubFjMaxDJSTu_001} position={[0, 0.011, 0.052]} />
            <mesh geometry={nodes.nebiALwREVCSJFn_001_1.geometry} material={materials.bgvGtOnlKTngRTa} />
            <mesh geometry={nodes.FgGYqCDmJvjNSBz_1.geometry} material={materials.sutbfgrzYzWATAD} />
            <mesh geometry={nodes.wkjDIALELzQOChK_001_1.geometry} material={materials.bgvGtOnlKTngRTa} />
            <mesh geometry={nodes.RFizOmocwnzbGQJ_1.geometry} material={materials.bgvGtOnlKTngRTa} />
            <mesh geometry={nodes.xMizMWYsiyRaAZY_1.geometry} material={materials.bgvGtOnlKTngRTa} />
            <mesh geometry={nodes.dQWfknomnuBZone_1.geometry} material={materials.vWKPeCPaRejOene} />
            <mesh geometry={nodes.EAuFkBSDSdPBjEo_1.geometry} material={materials.bgvGtOnlKTngRTa} />
            <mesh geometry={nodes.fKJqCnyMsuEhYLh_1.geometry} material={materials.VovqRyleCVdRXyX} />
            <mesh geometry={nodes.yiBSqiYGdmKSdPa_1.geometry} material={materials.IEoaprUFYjrYQuo} />
            <mesh geometry={nodes.ySZMzkhadvPbaYj_001_1.geometry} material={materials.DFBuKSsxxpOpRhd} />
            <mesh geometry={nodes.CIrPySHPJHRPtAx_1.geometry} material={materials.DFBuKSsxxpOpRhd} />
            <mesh geometry={nodes.CLJLFFafIZYVZAD_001_1.geometry} material={materials.GhmRDUWVRhYeOkJ_001} />
            <mesh geometry={nodes.mPZvLYOFCgmKyGn_001_1.geometry} material={materials.ArjOFmDNzaBSwZD} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/mugModel.glb')
